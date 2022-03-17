import React from 'react';
import css from './index.module.scss';
import neg from '../../../../assets/images/neg.png';
import pos from '../../../../assets/images/pos.png';
import neu from '../../../../assets/images/neu.png';
import EmojiItem from './EmojiItem';

const data = [
  { src: pos.src, type: 'pos', count: 14 },
  { src: neu.src, type: 'neu', count: 58 },
  { src: neg.src, type: 'neg', count: 14 },
];

function ReviewsByEmoji() {
  return (
    <div className={css.wrapper}>
      {data.map((elem) => (
        <EmojiItem
          key={elem.type}
          src={elem.src}
          type={elem.type}
          count={elem.count}
        />
      ))}
    </div>
  );
}

export default React.memo(ReviewsByEmoji);
