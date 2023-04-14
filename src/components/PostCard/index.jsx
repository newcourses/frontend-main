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
      <a className={css.wrapper}>
        <Card
          loading={loading}
          hoverable
          cover={
            <div>
              <div style={{ backgroundImage }} className={css.componentBanner}>
                <div style={{ backgroundImage }} className={css.banner} />
              </div>
            </div>
          }
        >
          <div className={css.wrapperBody}>
            <Card.Meta
              title={title}
              description={<div className={css.preview}>{preview}</div>}
              style={{
                height: '200px',
              }}
            />
            <div className={css.footer}>
              <div>{date && moment(date).format('DD.MM.YYYY')}</div>
              <div>Читать полностью</div>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default PostCard;
