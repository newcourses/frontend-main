import React, { useMemo } from 'react';
import css from './index.module.scss';
import negImg from '../../../../assets/images/neg.png';
import posImg from '../../../../assets/images/pos.png';
import neuImg from '../../../../assets/images/neu.png';
import EmojiItem from './EmojiItem';

function ReviewsByEmoji({ pos, neu, neg }) {
  const data = useMemo(
    () => [
      { src: posImg.src, type: 'pos', count: pos },
      { src: neuImg.src, type: 'neu', count: neu },
      { src: negImg.src, type: 'neg', count: neg },
    ],
    [neg, neu, pos],
  );

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
