import React from 'react';
import { Card } from 'antd';
import moment from 'moment';
import CardHeader from './components/CardHeader/CardHeader';
import Content from './components/Content/Content';
import ActionButton from './components/ActionButton/ActionButton';

function CourseCard() {
  return (
    <Card
      title={
        <CardHeader
          schoolInfo={{
            rating: 4.6,
            link: '/test',
            countReviews: 10,
            name: 'Учу учить',
            value: 'skillbox',
          }}
          title="Курс Teens (Занятия помогут прокачать язык, улучшить оценки в школе или преодолеть языковой барьер)"
        />
      }
      actions={[<ActionButton link="/" name="skillbox.ru" />]}
      style={{ width: '40rem' }}
    >
      <Content
        {...{
          start: moment().format('DD MMMM'),
          duration: '1 месяц',
          format:
            'занятия в записи, преподаватели проверяют дз, есть чат студентов курса',
          peculiarities:
            'самая известная школа. Доступ к записям курсов сохраняют навсегда',
        }}
      />
    </Card>
  );
}

CourseCard.propTypes = {};

export default React.memo(CourseCard);
