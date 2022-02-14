import 'moment/locale/ru';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';
import { ISchoolInfo } from '../../propTypes';
import css from './CoursesTable.module.scss';
import { CourseInfo } from '../../components/CoursesTableCell';
import AboutSchool from '../../components/AboutSchool/AboutSchool';

moment.locale('ru');

const columns = [
  {
    title: 'Курс',
    dataIndex: 'courseInfo',
    width: '21.5rem',
    render: (cell) => <CourseInfo link={cell.link} title={cell.title} />,
  },
  {
    title: 'Школа курса',
    dataIndex: 'courseInfo',
    sorter: true,
    width: '17rem',
    render: (cell) => <AboutSchool {...cell.schoolInfo} wrapperStyles={{}} />,
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    sorter: true,
    width: '13.5rem',
    render: (cell) => (
      <div className={css.textCell}>
        {cell.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
        })}
      </div>
    ),
  },
  {
    title: 'Мин. платеж в рассрочку',
    dataIndex: 'installment',
    sorter: true,
    width: '13.5rem',
    render: (cell) => (
      <div className={css.textCell}>
        {cell
          ? `от ${cell.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            })}`
          : 'Рассрочки нет'}
      </div>
    ),
  },
  {
    title: 'Длительность',
    dataIndex: 'duration',
    sorter: true,
    width: '13rem',
    render: (cell) => (
      <div className={css.textCell}>{cell || 'Уточняйте на сайте школы'}</div>
    ),
  },
  {
    title: 'Дата начала',
    dataIndex: 'start',
    sorter: true,
    width: '13rem',
    render: (cell) => (
      <div className={css.textCell}>
        {cell ? moment(cell).format('DD MMMM') : 'Уточняйте на сайте школы'}
      </div>
    ),
  },
  {
    title: 'Ссылка на курс',
    dataIndex: 'courseInfo',
    sorter: true,
    render: (cell) => (
      <Button
        type="primary"
        size="large"
        href={cell.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={css.textCell}>курс на {cell.schoolInfo.mainLink}</span>
      </Button>
    ),
  },
];

function CoursesTable({ dataSource, title, description }) {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <div className={css.description}>{description}</div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        className={css.wrapperTable}
      />
    </div>
  );
}

CoursesTable.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dataSource: PropTypes.arrayOf({
    _id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    installment: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    courseInfo: PropTypes.objectOf({
      ...ISchoolInfo.isRequired,
      value: PropTypes.string.isRequired,
      mainLink: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default React.memo(CoursesTable);
