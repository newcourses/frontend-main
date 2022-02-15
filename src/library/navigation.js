export default {
  home: { link: '/', caption: 'На главную' },
  coursesCategory: {
    link: '/courses-category/[id]',
    as: (id) => `/courses-category/${id}`,
    caption: 'На главную',
  },
  about: { link: '/about', caption: 'О нас' },
  contacts: { link: '/contacts', caption: 'Контакты' },
};
