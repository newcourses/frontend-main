import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Table } from 'antd';
import css from './InfoSchoolAndCourses.module.scss';
import AboutSchool from '../../components/AboutSchool/AboutSchool';
import { SchoolInfo } from '../../propTypes';
import { CourseInfo } from '../../components/CoursesTableCell';

const columns = [
  {
    title: 'Курс',
    dataIndex: '',
    width: '21.5rem',
    render: (cell) => <CourseInfo link={cell.link} title={cell.title} />,
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
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
    title: 'Рассрочка',
    dataIndex: 'installment',
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
    width: '13rem',
    render: (cell) => (
      <div className={css.textCell}>{cell || 'Уточняйте на сайте школы'}</div>
    ),
  },
];

function InfoSchoolAndCourses({
  name,
  link,
  value,
  rating,
  courses,
  benefits,
  description,
  countReviews,
  disadvantages,
}) {
  return (
    <div>
      <Row style={{ background: '#f7fafc' }}>
        <Col flex="2 1" className={css.wrapperCell}>
          <AboutSchool
            link={link}
            countReviews={countReviews}
            rating={rating}
            name={name}
            value={value}
            wrapperStyles={{
              display: 'flex',
              width: '34rem',
              justifyContent: 'space-between',
            }}
          />
        </Col>
        <Col flex="1 1" className={css.wrapperCell}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </Col>
      </Row>

      <Row>
        <Col flex="2 1" className={css.wrapperCell}>
          <span>{description}</span>

          <Table
            pagination={false}
            columns={columns}
            dataSource={courses}
            className={css.wrapperTable}
          />
        </Col>
        <Col flex="1 1" className={css.wrapperCell}>
          <div>
            Преимущества школы
            <ul>
              {benefits.map((elem) => (
                <li key={elem._id}>{elem.value}</li>
              ))}
            </ul>
          </div>
          <div>Недостатки</div>
          <ul>
            {disadvantages.map((elem) => (
              <li key={elem._id}>{elem.value}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

InfoSchoolAndCourses.propTypes = {
  ...SchoolInfo.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  disadvantages: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};

InfoSchoolAndCourses.defaultProps = {
  benefits: [],
  disadvantages: [],
};

export default React.memo(InfoSchoolAndCourses);
