import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './index.module.scss';
import reply from '../../../../../assets/images/nex.png';
import Reactions from '../../../../../components/Reactions';
import { declOfNumComments } from '../../../../../helpers';
import { IBriefReaction } from '../../../../../propTypes/ICommon';

function Footer({
  likes,
  dislikes,
  commentCount,
  isOpenComments,
  setIsOpenComments,
}) {
  return (
    <div className={css.wrapper}>
      <div>
        <button className={css.button} type="button">
          Прокомментировать
        </button>

        <button
          className={cn(css.button, css.comments)}
          type="button"
          onClick={() => setIsOpenComments(!isOpenComments)}
        >
          <img src={reply.src} alt="replies" className={css.commentsIcon} />
          {declOfNumComments(commentCount, true)}
        </button>
      </div>

      <Reactions likes={likes} dislikes={dislikes} />
    </div>
  );
}

Footer.propTypes = {
  ...IBriefReaction,
  commentCount: PropTypes.number.isRequired,
};
Footer.defaultProps = {};

export default React.memo(Footer);
