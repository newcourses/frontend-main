import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import css from './index.module.scss';

function CardHeader({ title, offerUrl, dateEnd, dateStart }) {
  return (
    <div className={css.component}>
      <Link href={offerUrl}>
        <a className={css.title}>{title}</a>
      </Link>
      <div className={css.dateWrapper}>
        {dateStart && (
          <div className={css.date}>
            c {moment(dateStart).format('DD.MM.YYYY')}
          </div>
        )}
        {dateEnd && (
          <div className={css.date}>
            до {moment(dateEnd).format('DD.MM.YYYY')}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(CardHeader);
