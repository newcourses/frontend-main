import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import moment from 'moment';
import NAVIGATION from 'library/navigation';
import css from './index.module.scss';

function PostCard({ uid, date, title, banner, preview, loading }) {
  const backgroundImage = `url("${process.env.NEXT_PUBLIC_API}${
    banner?.data?.attributes?.url || process.env.NEXT_PUBLIC_POST_PLUG
  }")`;

  return (
    <Link href={NAVIGATION.post.link} as={NAVIGATION.post.as(uid)}>
      <a>
        <Card
          loading={loading}
          hoverable
          cover={
            <div className={css.coverWrapper}>
              <div style={{ backgroundImage }} className={css.componentBanner}>
                <div style={{ backgroundImage }} className={css.banner} />
              </div>
            </div>
          }
        >
          <div className={css.wrapperBody}>
            <Card.Meta
              title={title}
              description={preview}
              style={{
                height: '200px',
                overflow: 'hidden',
                'text-overflow': 'ellipsis',
              }}
            />
            <div className={css.footer}>
              <div className={css.date}>
                {date && moment(date).format('DD.MM.YYYY')}
              </div>
              <div className={css.readCompletely}>Читать полностью</div>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default PostCard;
