import React from 'react';
import { useRouter } from 'next/router';
import Main from '../../../layouts/Main/Main';
import useVisibleDrawer from '../../../hooks/useVisibleDrawer';
import { ICourseCategories } from '../../../propTypes';
import getCategories from '../../../controllers/getCategories';
import CoursesTable from '../../../containers/CoursesTable/CoursesTable';
import CourseCard from '../../../components/CourseCard/CourseCard';
import mockCoursesTable from './mockCoursesTable.json';
import mockSchoolInfoAndCourses from './mockSchoolInfoAndCourses.json';
import SchoolsInfo from '../../../containers/SchoolsInfo';

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
  const router = useRouter();
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <div>
        <div className="col-xl-4 col-s-6 col-m-2" />
        <main>
          <CoursesTable
            title="Курсы по product-менеджменту"
            description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах."
            dataSource={mockCoursesTable}
          />
          <SchoolsInfo
            title="Курсы по product-менеджменту"
            description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах."
            schools={mockSchoolInfoAndCourses}
          />
          <CourseCard />
        </main>
      </div>
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

export async function getServerSideProps({ params }) {
  console.log(params);
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(CourseCategory);
