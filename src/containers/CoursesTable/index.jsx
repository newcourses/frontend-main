import 'moment/locale/ru';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';
import { ISchoolInfo } from '../../propTypes';
import css from './index.module.scss';
import { CourseInfo } from '../../components/CoursesTableCell';
import AboutSchool from '../../components/AboutSchool';

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
          dataIndex="courseInfo"
          width={220}
          render={(cell) => <CourseInfo link={cell.link} title={cell.title} />}
        />
        <Table.Column
          title="Школа курса"
          dataIndex="courseInfo"
          sorter
          width={200}
          render={(cell) => (
            <AboutSchool {...cell.schoolInfo} wrapperStyles={css.aboutSchool} />
          )}
        />
        <Table.Column
          title="Стоимость"
          dataIndex="price"
          sorter
          width={145}
          render={(cell) => (
            <div className={css.textCell}>
              {cell.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}
            </div>
          )}
        />
        <Table.Column
          title="Мин. платеж в рассрочку"
          dataIndex="installment"
          sorter
          width={145}
          render={(cell) => (
            <div className={css.textCell}>
              {cell
                ? `от ${cell.toLocaleString('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                  })}`
                : 'Рассрочки нет'}
            </div>
          )}
        />
        <Table.Column
          title="Длительность"
          dataIndex="duration"
          sorter
          width={130}
          render={(cell) => (
            <div className={css.textCell}>
              {cell || 'Уточняйте на сайте школы'}
            </div>
          )}
        />
        <Table.Column
          title="Дата начала"
          dataIndex="start"
          sorter
          width={130}
          render={(cell) => (
            <div className={css.textCell}>
              {cell
                ? moment(cell).format('DD MMMM')
                : 'Уточняйте на сайте школы'}
            </div>
          )}
        />
        <Table.Column
          title="Ссылка на курс"
          dataIndex="courseInfo"
          sorter
          width={240}
          render={(cell) => (
            <Button
              className={css.button}
              style={{ width: '100%' }}
              type="primary"
              size="large"
              href={cell.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={css.textCell}>
                курс на {cell.schoolInfo.mainLink}
              </span>
            </Button>
          )}
        />
      </Table>
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
    courseInfo: ISchoolInfo.isRequired,
  }).isRequired,
};

export default React.memo(CoursesTable);
