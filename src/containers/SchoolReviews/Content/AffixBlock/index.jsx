import React from 'react';
import { Affix } from 'antd';
import css from './index.module.scss';
import SchoolInfo from './SchoolInfo';
import Categories from './Categories';
import OtherSchools from './OtherSchools';

const OFFSET_TOP = 20;

function AffixBlock({ otherSchools, school, categories, setVisibleDrawer }) {
  return (
    <Affix offsetTop={OFFSET_TOP}>
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
