import React from 'react';
import { Select } from 'antd';
import { COUNT_DEFAULT_SIZE_PAGE, OPTIONS_SIZE_PAGE } from 'library/constants';

function PageSizeSelect({ setPageSize, wrapperStyle }) {
  return (
    <Select
      className={wrapperStyle}
      defaultValue={COUNT_DEFAULT_SIZE_PAGE}
      style={{ width: 120 }}
      onChange={setPageSize}
    >
      {OPTIONS_SIZE_PAGE.map((elem) => (
        <Select.Option key={elem} value={elem}>
          {elem}
        </Select.Option>
      ))}
    </Select>
  );
}

export default React.memo(PageSizeSelect);
