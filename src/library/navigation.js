export default {
  home: { link: '/', caption: 'На главную' },
  coursesCategory: {
    link: '/courses-category/[code]',
    as: (id) => `/courses-category/${id}`,
  },
  about: { link: '/about', caption: 'О нас' },
  contacts: { link: '/contacts', caption: 'Контакты' },
  schoolsList: { link: '/schools', caption: 'Отзывы о школах' },
  schoolReview: {
    link: '/schools/[code]/reviews',
    as: (value) => `/schools/${value}/reviews`,
  },
};
