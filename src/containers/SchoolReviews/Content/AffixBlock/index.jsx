import { Affix } from 'antd';
import React, { useState } from 'react';
import css from './index.module.scss';
import SchoolInfo from './SchoolInfo';
import Categories from './Categories';
import OtherSchools from './OtherSchools';

function AffixBlock({ otherSchools, school, categories, setVisibleDrawer }) {
  const [top] = useState(40);

  return (
    <Affix offsetTop={top}>
      <div className={css.affixBlock}>
        <SchoolInfo
          description={school?.attributes?.description}
          displayLink={school?.attributes?.displayLink}
          mainLink={school?.attributes?.mainLink}
        />
        <Categories
          categories={categories}
          setVisibleDrawer={setVisibleDrawer}
        />
        <OtherSchools schools={otherSchools} />
      </div>
    </Affix>
  );
}

export default React.memo(AffixBlock);
