import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';

export default function PostCard({
  uid,
  date,
  title,
  banner,
  preview,
  loading,
}) {
  return (
    <Link href={uid}>
      <a>
        <Card
          loading={loading}
          hoverable
          cover={
            <>
              <img
                alt="example"
                src={`/api${
                  banner?.data?.attributes?.url ||
                  process.env.NEXT_PUBLIC_POST_PLUG
                }`}
              />
              {date}
            </>
          }
        >
          <Card.Meta title={title} description={preview} />
        </Card>
      </a>
    </Link>
  );
}
