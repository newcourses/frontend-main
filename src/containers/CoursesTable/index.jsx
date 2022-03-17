import 'moment/locale/ru';
import React from 'react';
import moment from 'moment';
import { Button, Table } from 'antd';
import css from './index.module.scss';
import {
  CourseInfo,
  LocalPrice,
  LocalInstallment,
} from '../../components/CoursesTableCells';
import AboutSchool from '../../components/AboutSchool';
import Duration from '../../components/CoursesTableCells/Duration';

moment.locale('ru');

function CoursesTable({ dataSource, title, description }) {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <div className={css.description}>{description}</div>
      <Table
        pagination={false}
        dataSource={dataSource}
        className={css.wrapperTable}
        scroll={{ x: 1250 }}
        rowClassName={css.row}
      >
        <Table.Column
          className={css.firstColum}
          title="Курс"
          dataIndex="attributes"
          width={220}
          render={({ url, title: titleCourse }) => (
            <CourseInfo link={url} title={titleCourse} />
          )}
        />
        <Table.Column
          title="Школа курса"
          dataIndex="attributes"
          sorter
          width={200}
          render={({ school }) => (
            <AboutSchool
              {...school?.data?.attributes}
              wrapperStyles={css.aboutSchool}
            />
          )}
        />
        <Table.Column
          title="Стоимость"
          dataIndex="attributes"
          sorter
          width={145}
          render={({ price }) => (
            <LocalPrice value={price} currency="RUB" location="ru-RU" />
          )}
        />
        <Table.Column
          title="Мин. платеж в рассрочку"
          dataIndex="attributes"
          sorter
          width={145}
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
          sorter
          width={130}
          render={({ duration, durationUnit }) => (
            <Duration duration={duration} unit={durationUnit} />
          )}
        />
        <Table.Column
          title="Дата начала"
          dataIndex="attributes"
          sorter
          width={130}
          render={({ start }) => (
            <div className={css.textCell}>
              {start
                ? moment(start).format('DD MMMM')
                : 'Уточняйте на сайте школы'}
            </div>
          )}
        />
        <Table.Column
          title="Ссылка на курс"
          dataIndex="attributes"
          sorter
          width={240}
          render={({ school, url }) => (
            <Button
              className={css.button}
              style={{ width: '100%' }}
              type="primary"
              size="large"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={css.textCell}>
                курс на {school?.data?.attributes?.displayLink}
              </span>
            </Button>
          )}
        />
      </Table>
    </div>
  );
}

export default React.memo(CoursesTable);
