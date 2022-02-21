export default {
  home: { link: '/', caption: 'На главную' },
  coursesCategory: {
    link: '/courses-category/[value]',
    as: (id) => `/courses-category/${id}`,
  },
  about: { link: '/about', caption: 'О нас' },
  contacts: { link: '/contacts', caption: 'Контакты' },
  schoolsList: { link: '/schools', caption: 'Отзывы о школах' },
  schoolsReviews: {
    link: '/schools/reviews',
    caption: 'Страница не определена',
  },
  schoolReview: {
    link: '/schools/reviews/[value]',
    as: (value) => `/schools/reviews/${value}`,
  },
};
