import React from 'react';
import { Collapse } from 'react-collapse';
import css from './index.module.scss';
import Reactions from '../../../../../components/Reactions';

function Comment({ isOpened, text, date, likes, dislikes, reviewer }) {
  return (
    <div className={css.container}>
      <Collapse isOpened={isOpened}>
        <div className={css.wrapper}>
          <div>{date}</div>
          <h3 className={css.name}>{reviewer.data.attributes.name}</h3>
          <p className={css.text}>{text}</p>
          <Reactions
            wrapperStyle={css.wrapperReactions}
            likes={likes}
            dislikes={dislikes}
          />
        </div>
      </Collapse>
    </div>
  );
}

export default React.memo(Comment);
