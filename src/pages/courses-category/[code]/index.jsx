import React from 'react';
import Main from '../../../layouts/Main';
import mockCourseCards from './mockCourseCards.json';
import mockCoursesTable from './mockCoursesTable.json';
import { ICourseCategories } from '../../../propTypes';
import SchoolsInfo from '../../../containers/SchoolsInfo';
import CoursesTable from '../../../containers/CoursesTable';
import useVisibleDrawer from '../../../hooks/useVisibleDrawer';
import getCategories from '../../../controllers/getCategories';
import ShowcaseCourses from '../../../containers/ShowcaseCourses';
import mockSchoolInfoAndCourses from './mockSchoolInfoAndCourses.json';

/*
[
  '{{repeat(30, 30)}}',
  {
    _id: '{{objectId()}}',
    price: '{{integer(1000, 99900)}}',
    installment: '{{integer(100, 9990)}}',
    duration: '{{integer(1, 48)}} месяц',
    start: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
    courseInfo: {
      title: function (tags) {
        var str = tags.lorem(tags.integer(1, 7), 'words');
        return str[0].toUpperCase() + str.slice(1);
      },
      link: 'https://gb.ru/geek_university/graphic-design',
      schoolInfo: {
        rating: '{{floating(0, 10, 1)}}',
        link: '/test',
        countReviews: '{{integer(10, 999)}}',
        name: '{{company()}}',
        value: '{{lorem(1, "words")}}',
        mainLink: function (tags) {
          var domenZones = ['ru', 'com', 'io'];
          return this.value + '.' + domenZones[tags.integer(0, domenZones.length - 1)];
        }
      }
    }
  }
]
*/
/* [
  '{{repeat(30, 30)}}',
  {
    _id: '{{objectId()}}',
    rating: '{{floating(0, 10, 1)}}',
    link: '/test',
    countReviews: '{{integer(10, 999)}}',
    name: '{{company()}}',
    value: '{{lorem(1, "words")}}',
    mainLink: function (tags) {
      var domenZones = ['ru', 'com', 'io'];
      return this.value + '.' + domenZones[tags.integer(0, domenZones.length - 1)];
    },
    description: function (tags) {
      var str = tags.lorem(tags.integer(10, 70), 'words');
      return str[0].toUpperCase() + str.slice(1);
    },
    benefits: [
      '{{repeat(1, 9)}}',
      {
        id: '{{objectId()}}',
        value: function (tags) {
          var str = tags.lorem(tags.integer(7, 15), 'words');
          return str[0].toUpperCase() + str.slice(1);
        }
      }],

    disadvantages: [
      '{{repeat(1, 9)}}',
      {
        id: '{{objectId()}}',
        value: function (tags) {
          var str = tags.lorem(tags.integer(7, 15), 'words');
          return str[0].toUpperCase() + str.slice(1);
        }
      }],
    courses: [
      '{{repeat(3, 10)}}',
      {
        title: function (tags) {
          var str = tags.lorem(tags.integer(1, 7), 'words');
          return str[0].toUpperCase() + str.slice(1);
        },
        link: 'https://gb.ru/geek_university/graphic-design',
        price: '{{integer(1000, 99900)}}',
        installment: '{{integer(100, 9990)}}',
        duration: '{{integer(1, 48)}} months',
        start: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}'
      }]
  }
] */

function CourseCategory({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <main>
        <section>
          <CoursesTable
            title="Курсы по product-менеджменту"
            description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах."
            dataSource={mockCoursesTable}
          />
        </section>
        <section>
          <SchoolsInfo
            title="Курсы по product-менеджменту"
            description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах."
            schools={mockSchoolInfoAndCourses}
          />
        </section>
        <section>
          <ShowcaseCourses
            title="Эти же курсы, но подробнее:"
            cards={mockCourseCards}
          />
        </section>
      </main>
    </Main>
  );
}

CourseCategory.propTypes = {
  categories: ICourseCategories,
};

CourseCategory.defaultProps = {
  categories: {
    data: [],
  },
};

export async function getServerSideProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(CourseCategory);
