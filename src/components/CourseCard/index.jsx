import React from 'react';
import { Card } from 'antd';
import css from './index.module.scss';
import Content from './components/Content';
import CardHeader from './components/CardHeader';
import ActionButton from './components/ActionButton';

function CourseCard({
  url,
  title,
  start,
  price,
  school,
  format,
  params,
  duration,
  oldPrice,
  durationUnit,
  creditPayment,
}) {
  return (
    <Card
      className={css.wrapper}
      title={
        <CardHeader
          price={price}
          oldPrice={oldPrice}
          creditPayment={creditPayment}
          schoolInfo={school?.data?.attributes}
          title={title}
        />
      }
      actions={[
        <ActionButton
          link={url}
          name={school?.data?.attributes?.displayLink}
        />,
      ]}
    >
      <Content
        price={price}
        start={start}
        params={params}
        format={format}
        duration={duration}
        oldPrice={oldPrice}
        durationUnit={durationUnit}
        creditPayment={creditPayment}
      />
    </Card>
  );
}

export default React.memo(CourseCard);
