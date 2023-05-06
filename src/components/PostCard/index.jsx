import React from 'react';
import { Card } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import moment from 'moment';
import NAVIGATION from 'library/navigation';
import logoDark from 'assets/images/logo-dark.png';
import css from './index.module.scss';

function getSchemaData({ title, preview, bgUrl, date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: preview,
    image: bgUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Newcourses',
      logo: {
        '@type': 'ImageObject',
        url: logoDark,
      },
    },
    datePublished: date,
    dateModified: date,
  };
}

function PostCard({ uid, date, title, banner, preview, loading }) {
  const bgUrl = `${process.env.NEXT_PUBLIC_API}${
    banner?.data?.attributes?.url || process.env.NEXT_PUBLIC_POST_PLUG
  }`;
  const backgroundImage = `url("${bgUrl}")`;

  const schemaData = getSchemaData({
    date,
    title,
    preview,
    bgUrl,
  });

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <Link href={NAVIGATION.post.link} as={NAVIGATION.post.as(uid)}>
        <a className={css.wrapper}>
          <Card
            loading={loading}
            hoverable
            cover={
              <div>
                <div
                  style={{ backgroundImage }}
                  className={css.componentBanner}
                >
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
    </>
  );
}

export default PostCard;
