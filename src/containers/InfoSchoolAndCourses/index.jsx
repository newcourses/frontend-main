import React from 'react';
import cn from 'classnames';
import {
  CourseInfo,
  LocalPrice,
  LocalInstallment,
} from 'components/CoursesTableCells';
import { Col, Row, Table } from 'antd';
import AboutSchool from 'components/AboutSchool';
import Duration from 'components/CoursesTableCells/Duration';
import css from './index.module.scss';

function InfoSchoolAndCourses(props) {
  const {
    code,
    name,
    grade,
    products,
    mainLink,
    advantages,
    description,
    displayLink,
    countReviews,
    disadvantages,
  } = props;
  return (
    <div className={css.container}>
      <Row className={css.header}>
        <Col flex="2 1" className={cn(css.leftCell, css.wrapperCell)}>
          <AboutSchool
            mainLink={mainLink}
            countReviews={countReviews}
            grade={grade}
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
            code={code}
            wrapperStyles={css.aboutSchool}
          />
        </Col>
        <Col flex="1 1" className={css.wrapperCell}>
          <a
            className={css.linkSchool}
            href={mainLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {displayLink}
          </a>
        </Col>
      </Row>

      <Row>
        <Col flex="2 1" className={cn(css.leftCell, css.wrapperCell)}>
          <span className={css.descriptionSchool}>{description}</span>
          <Table
            scroll={{ x: 600 }}
            pagination={false}
            dataSource={products.data}
          >
            <Table.Column
              title="Курс"
              dataIndex="attributes"
              width={215}
              render={({ url, title }) => (
                <CourseInfo link={url} title={title} />
              )}
            />
            <Table.Column
              title="Стоимость"
              dataIndex="attributes"
              width={135}
              render={({ price }) => (
                <LocalPrice value={price} currency="RUB" location="ru-RU" />
              )}
            />
            <Table.Column
              title="Рассрочка"
              dataIndex="attributes"
              width={135}
              render={({ creditPayment }) => (
                <LocalInstallment
                  value={creditPayment}
                  currency="RUB"
                  location="ru-RU"
                />
              )}
            />
            <Table.Column
              title="Длительность"
              dataIndex="attributes"
              width={130}
              render={({ duration, durationUnit }) => (
                <Duration duration={duration} unit={durationUnit} />
              )}
            />
          </Table>
        </Col>
        <Col flex="1 1" className={css.wrapperCell}>
          {advantages.length ? (
            <>
              <div className={css.titleBenefits}>Преимущества школы</div>
              <ul className={cn(css.ulBenefits, css.ulCommon)}>
                {advantages.map((elem) => (
                  <li key={elem.id}>{elem.text}</li>
                ))}
              </ul>
            </>
          ) : null}
          {disadvantages.length ? (
            <>
              <div className={css.titleDisadvantages}>Недостатки</div>
              <ul className={cn(css.ulDisadvantages, css.ulCommon)}>
                {disadvantages.map((elem) => (
                  <li key={elem.id}>{elem.text}</li>
                ))}
              </ul>
            </>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(InfoSchoolAndCourses);
