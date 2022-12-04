import React from 'react';
import { Card } from 'antd';
import css from './index.module.scss';
import Content from './components/Content';
import CardHeader from './components/CardHeader';
import ActionButton from './components/ActionButton';

function PromoCodeCard({
  name,
  landing,
  promotion,
  dateEnd,
  offerName,
  dateStart,
  description,
}) {
  return (
    <Card
      className={css.wrapper}
      title={
        <CardHeader
          dateEnd={dateEnd}
          dateStart={dateStart}
          offerUrl={landing?.link}
          title={offerName || 'Я пустой'}
        />
      }
      actions={[
        <ActionButton link={landing?.link} name={offerName || 'Я пустой'} />,
      ]}
    >
      <Content
        title={name}
        landingUrl={landing.link}
        description={description || promotion?.description || 'пустой'}
      />
    </Card>
  );
}

export default React.memo(PromoCodeCard);
