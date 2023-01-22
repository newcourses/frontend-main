import React from 'react';
import css from './index.module.scss';

function Header() {
  return (
    <section className={css.container}>
      <h1 className={css.title}>Акции школ</h1>
      <div className={css.description}>
        Здесь мы собираем актуальные акции онлайн-школ. Мы решили сделать такой
        раздел, т.к. школы часто проводят акции с очень большими скидками. С
        этими акциями можно сильно сэкономить при покупке курсов.
      </div>
    </section>
  );
}

export default React.memo(Header);
