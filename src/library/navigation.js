export default {
  home: { link: '/', caption: 'Главная' },
  coursesCategory: {
    link: '/courses-category/[code]',
    as: (id) => `/courses-category/${id}`,
  },
  freeCoursesCategory: {
    link: '/free-courses-category/[code]',
    as: (id) => `/free-courses-category/${id}`,
  },
  about: { link: '/about', caption: 'О нас' },
  contacts: { link: '/contacts', caption: 'Контакты' },
  freeCourses: {
    link: '/free-courses-category',
    caption: 'Бесплатные курсы',
  },

  schoolsList: { link: '/schools', caption: 'Отзывы о школах' },
  schoolReview: {
    link: '/schools/[code]/reviews',
    as: (value) => `/schools/${value}/reviews`,
  },
  promoCodes: {
    link: '/promo-codes',
    caption: 'Промокоды и акции',
  },
};
