const fs = require('fs');
const globby = require('globby');
const axios = require('axios');
const qs = require('qs');

const getCategoriesCoursesDynamicPage = async (template) => {
  const query = qs.stringify(
    {
      populate: {
        subcategories: {
          fields: ['code'],
        },
      },
      pagination: { pageSize: 100 },
      fields: ['code'],
    },
    { encodeValuesOnly: true },
  );

  const { data: categories } = await axios.get(
    `http://localhost:1337/api/categories/?${query}`,
  );

  const dynamicPages = [];

  categories.data?.forEach((category) => {
    category.attributes?.subcategories?.data?.forEach((subCategory) => {
      dynamicPages.push(
        template.replace('[code]', subCategory.attributes.code),
      );
    });
    dynamicPages.push(template.replace('[code]', category.attributes.code));
  });

  return dynamicPages;
};
const getSchoolsReviewsDynamicPage = async (template) => {
  const query = qs.stringify(
    {
      pagination: { page: 'all' },
      fields: 'code',
    },
    { encodeValuesOnly: true },
  );

  const { data: schools } = await axios.get(
    `http://localhost:1337/api/schools/?${query}`,
  );

  const dynamicPages = [];

  schools.data?.forEach((school) => {
    dynamicPages.push(template.replace('[code]', school.attributes.code));
  });

  return dynamicPages;
};

function addPage(page) {
  const path = page
    .replace('src/pages/courses-category/[code]/index.jsx', '')
    .replace('src/pages/schools/[code]/reviews/index.jsx', '')
    .replace('src/pages', '')
    .replace('.jsx', '')
    .replace('.mdx', '')
    .replace('index', '');
  const route = path === '/index' ? '' : path;
  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

module.exports = async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const defaultPages = await globby([
    'src/pages/**/*{.js,.jsx,.mdx}',
    '!src/pages/schools/[code]/index.jsx',
    '!src/pages/_*.js',
    '!src/pages/_*.jsx',
    '!src/pages/api',
  ]);

  const templateCoursesCategory = defaultPages.find(
    (page) => page === 'src/pages/courses-category/[code]/index.jsx',
  );
  const templateSchoolReviews = defaultPages.find(
    (page) => page === 'src/pages/schools/[code]/reviews/index.jsx',
  );

  const dynamicPages = {
    categoriesCourses: await getCategoriesCoursesDynamicPage(
      templateCoursesCategory,
    ),
    schoolReviews: await getSchoolsReviewsDynamicPage(templateSchoolReviews),
  };

  const pages = [
    ...defaultPages,
    ...dynamicPages.schoolReviews,
    ...dynamicPages.categoriesCourses,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((page) => page.indexOf('404.jsx') === -1)
  .map(addPage)
  .join('\n')}
</urlset>`;
  fs.writeFileSync('public/sitemap.xml', sitemap);
};
