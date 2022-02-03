import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';
import css from './DirectionCard.module.scss';

function DirectionCard({ title, subDirection, handler }) {
  return (
    <div className={css.wrapper}>
      <h2>{title}</h2>
      <nav>
        <ul>
          {subDirection.slice(0, 4).map((elem) => (
            <li>
              <Link href={elem.link} passHref>
                <a className={css.link}>{elem.title}</a>
              </Link>
            </li>
          ))}
          <li>
            <button type="button" className={css.button} onClick={handler}>
              Развернуть все
              <DownOutlined style={{ marginLeft: '1rem' }} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

DirectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  subDirection: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default React.memo(DirectionCard);
