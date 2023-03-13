import React from 'react';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import css from './index.module.scss';

function Post({ text }) {
  return (
    <ReactMarkdown className={css.container} rehypePlugins={[rehypeRaw]}>
      {text}
    </ReactMarkdown>
  );
}

export default React.memo(Post);
