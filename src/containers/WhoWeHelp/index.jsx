import React from 'react';
import awm1 from 'assets/images/awm-1.svg';
import awm2 from 'assets/images/awm-2.svg';
import awm3 from 'assets/images/awm-3.svg';
import awm4 from 'assets/images/awm-4.svg';
import css from './index.module.scss';
import InfirmCard from './InfirmCard';

const infirm = [
  {
    title: 'Школьники',
    items: [
      'Определиться с будущей профессией',
      'Найти нужные курсы по подготовке к ОГЭ / ЕГЭ',
      'Выбрать и поступить в ВУЗ',
    ],
    img: awm1,
  },
  {
    title: 'Студент',
    items: [
      'Быстро найти нужные курсы',
      'Повысить конкурентоспособность на рынке труда',
      'Выстроить стратегию по достижению карьерной цели',
    ],
    img: awm3,
  },
  {
    title: 'Молодой специалист',
    items: [
      'Найти курсы по повышению квалификации',
      'Выстроить стратегию карьерного роста и добиться повышения',
    ],
    img: awm2,
  },
  {
    title: 'Преподаватель',
    items: [
      'Передать знания большому количеству слушателей',
      'Получить дополнительный источник заработка',
    ],
    img: awm4,
  },
];

function WhoWeHelp() {
  return (
    <div className={css.container}>
      <h1>Кому и чем мы помогаем?</h1>
      <div className={css.wrapper}>
        {infirm.map(({ title, items, img }) => (
          <InfirmCard title={title} items={items} img={img} />
        ))}
      </div>
    </div>
  );
}

export default WhoWeHelp;
