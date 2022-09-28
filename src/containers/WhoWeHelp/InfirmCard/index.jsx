import React from 'react';
import css from './index.module.scss';

function InfirmCard({ title, items, img }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img
          src={img.src}
          alt="some img"
          className={css.img}
          width={251}
          height={251}
        />
        <div className={css.textBlock}>
          <h2>{title}</h2>
          <ul>
            {items.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfirmCard;
