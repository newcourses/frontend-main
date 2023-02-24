export default {
  home: { link: '/', caption: 'Главная' },
  coursesCategory: {
    link: '/courses-category/[code]',
    as: (id) => `/courses-category/${id}`,
  },
  productCategory: {
    link: '/[code]',
    as: (id) => `/${id}`,
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
  schoolData: {
    link: '/schools/[code]',
    as: (value) => `/schools/${value}`,
    caption: 'Курсы',
  },
  schoolReview: {
    link: '/schools/[code]/reviews',
    as: (value) => `/schools/${value}/reviews`,
  },
  promoCodes: {
    link: '/promo-codes',
    caption: 'Промокоды и акции',
  },
};
