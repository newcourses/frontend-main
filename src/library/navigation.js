export default {
  home: { link: '/', value: 'На главную' },
  coursesCategory: {
    link: '/courses-category/[id]',
    as: (id) => `/courses-category/${id}`,
    value: 'На главную',
  },
  about: { link: '/about', value: 'О нас' },
  contacts: { link: '/contacts', value: 'Контакты' },
};
