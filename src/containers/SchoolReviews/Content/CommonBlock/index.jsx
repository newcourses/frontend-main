import React from 'react';
import css from './index.module.scss';
import SchoolInfo from './SchoolInfo';
import Categories from './Categories';
import OtherSchools from './OtherSchools';

function CommonBlock({ otherSchools, school, categories, setVisibleDrawer }) {
  return (
    <div className={css.affixBlock}>
      <SchoolInfo
        description={school?.attributes?.description}
        displayLink={school?.attributes?.displayLink}
        mainLink={school?.attributes?.mainLink}
      />
      <Categories categories={categories} setVisibleDrawer={setVisibleDrawer} />
      <OtherSchools schools={otherSchools} />
    </div>
  );
}

export default React.memo(CommonBlock);
