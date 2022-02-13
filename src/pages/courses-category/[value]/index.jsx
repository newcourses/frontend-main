import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Main from '../../../layouts/Main/Main';

const directions = [
  {
    title: 'Управление',
    subDirection: [
      { title: 'Product-менеджмент', link: '/' },
      { title: 'Управление бизнесом', link: '/' },
      { title: 'Финансовая аналитика', link: '/' },
      { title: 'HR и управление персоналом', link: '/' },
      { title: 'Test5', link: '/' },
    ],
  },
  {
    title: 'Управление',
    subDirection: [
      { title: 'Product-менеджмент', link: '/' },
      { title: 'Управление бизнесом', link: '/' },
      { title: 'Финансовая аналитика', link: '/' },
      { title: 'HR и управление персоналом', link: '/' },
      { title: 'Test5', link: '/' },
    ],
  },
  {
    title: 'Управление',
    subDirection: [
      { title: 'Product-менеджмент', link: '/' },
      { title: 'Управление бизнесом', link: '/' },
      { title: 'Финансовая аналитика', link: '/' },
      { title: 'HR и управление персоналом', link: '/' },
      { title: 'Test5', link: '/' },
    ],
  },
  {
    title: 'Управление',
    subDirection: [
      { title: 'Product-менеджмент', link: '/' },
      { title: 'Управление бизнесом', link: '/' },
      { title: 'Финансовая аналитика', link: '/' },
      { title: 'HR и управление персоналом', link: '/' },
      { title: 'Test5', link: '/' },
    ],
  },
  {
    title: 'Управление',
    subDirection: [
      { title: 'Product-менеджмент', link: '/' },
      { title: 'Управление бизнесом', link: '/' },
      { title: 'Финансовая аналитика', link: '/' },
      { title: 'HR и управление персоналом', link: '/' },
      { title: 'Test5', link: '/' },
    ],
  },
];

const mockCoursesTable = [
  {
    _id: 'dsdsd',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 1.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: '2022-05-23',
  },
  {
    _id: 'dsdsd534',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
  },
  {
    _id: '4dsd534',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'dsds5fdsf34',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
        mainLink: 'skillbox.ru',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'ds56fdsf34',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'ds56fd76sf34',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'ds56fdg6sf34',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'ds56fdfgfg',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'ds56fdfgfg867',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'fdg54543dfgfg867',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'gdfgfs5658kj',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjttf36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 4.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
  {
    _id: 'jhjtt4656f36545fr',
    courseInfo: {
      title: 'Факультет Графического дизайна',
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: 2.6,
        link: '/test',
        countReviews: 10,
        name: 'Учу учить',
        value: 'skillbox',
      },
    },
    price: 100000,
    installment: 100,
    duration: '1 месяц',
    start: moment(),
  },
];

const schoolInfoAndCourses = [
  {
    rating: 1.6,
    link: '/test',
    countReviews: 10,
    name: 'Учу учить',
    description:
      'Нетология — это образовательная платформа. Обучаем современным востребованным профессиям в области ИТ и диджитала по направлениям: Маркетинг, Бизнес и управление, Дизайн и UX, Программирование, Аналитика, Soft Skills, MBA.',
    value: 'skillbox',
    mainLink: 'skillbox.ru',
    benefits: [
      { id: '1', value: 'Нанимают лучших преподавателей-экспертов' },
      { id: '2', value: 'Помогают в трудоустройстве' },
      { id: '3', value: 'Доступ к курсу и его обновлениям остается навсегда' },
      { id: '4', value: 'Нанимают лучших преподавателей-экспертов' },
    ],
    disadvantages: [
      {
        id: '1',
        value:
          'Они часто пишут - “6 месяцев бесплатного обучения”, но это просто отсрочка оплаты',
      },
      {
        id: '1',
        value: 'Есть жалобы, что бывают сбои со стороны технической части.',
      },
      { id: '1', value: 'Иногда неожиданно переносят занятия.' },
      { id: '1', value: 'Иногда возникают проблемы с личным кабинетом.' },
    ],
    courses: [
      {
        title: 'Факультет Графического дизайна',
        link: 'https://gb.ru/geek_university/graphic-design',
        price: 100000,
        installment: 100,
        duration: '1 месяц',
        start: '2022-05-23',
      },
      {
        title: 'Факультет Графического дизайна',
        link: 'https://gb.ru/geek_university/graphic-design',
        price: 100000,
        installment: 100,
        duration: '1 месяц',
        start: '2022-05-23',
      },
      {
        title: 'Факультет Графического дизайна',
        link: 'https://gb.ru/geek_university/graphic-design',
        price: 100000,
        installment: 100,
        duration: '1 месяц',
        start: '2022-05-23',
      },
      {
        title: 'Факультет Графического дизайна',
        link: 'https://gb.ru/geek_university/graphic-design',
        price: 100000,
        installment: 100,
        duration: '1 месяц',
        start: '2022-05-23',
      },
      {
        title: 'Факультет Графического дизайна',
        link: 'https://gb.ru/geek_university/graphic-design',
        price: 100000,
        installment: 100,
        duration: '1 месяц',
        start: '2022-05-23',
      },
    ],
  },
];

function CourseCategory(props) {
  const router = useRouter();
  console.log(router);
  return (
    <Main>
      <div>
        <main>
          404 ERROR
          <Link href="/" passHref>
            <a>go to Home</a>
          </Link>
          {/* <CourseDirections directions={directions} /> */}
          {/* <CourseCard /> */}
          {/* <InfoSchoolAndCourses {...schoolInfoAndCourses[0]} /> */}
          {/* <CoursesTable */}
          {/*  title="Курсы по product-менеджменту" */}
          {/*  description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах." */}
          {/*  dataSource={mockCoursesTable} */}
          {/* /> */}
        </main>
      </div>
    </Main>
  );
}

export default React.memo(CourseCategory);
