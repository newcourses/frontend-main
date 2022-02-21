import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Table } from 'antd';
import cn from 'classnames';
import css from './index.module.scss';
import AboutSchool from '../../components/AboutSchool';
import { ISchoolInfo } from '../../propTypes';
import { CourseInfo } from '../../components/CoursesTableCell';

const columns = [
  {
    title: 'Курс',
    dataIndex: '',
    width: '215px',
    render: (cell) => <CourseInfo link={cell.link} title={cell.title} />,
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    width: '135px',
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
    width: '135px',
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
    width: '130px',
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
  mainLink,
  description,
  countReviews,
  disadvantages,
}) {
  return (
    <div className={css.container}>
      <Row className={css.header}>
        <Col flex="2 1" className={css.wrapperCell}>
          <AboutSchool
            link={link}
            countReviews={countReviews}
            rating={rating}
            name={
              <div
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  marginRight: '15px',
                }}
              >
                {name}
              </div>
            }
            value={value}
            wrapperStyles={css.aboutSchool}
          />
        </Col>
        <Col flex="1 1" className={css.wrapperCell}>
          <a
            className={css.linkSchool}
            href={`https://${mainLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {mainLink}
          </a>
        </Col>
      </Row>

      <Row>
        <Col flex="2 1" className={css.wrapperCell}>
          <span className={css.descriptionSchool}>{description}</span>
          <Table
            scroll={{ x: 600 }}
            pagination={false}
            columns={columns}
            dataSource={courses}
          />
        </Col>
        <Col flex="1 1" className={css.wrapperCell}>
          <div className={css.titleBenefits}>Преимущества школы</div>
          <ul className={cn(css.ulBenefits, css.ulCommon)}>
            {benefits.map((elem) => (
              <li key={elem._id}>{elem.value}</li>
            ))}
          </ul>

          <div className={css.titleDisadvantages}>Недостатки</div>
          <ul className={cn(css.ulDisadvantages, css.ulCommon)}>
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
  ...ISchoolInfo.isRequired,
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
