import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import {
  COUNT_DEFAULT_SIZE_PAGE,
  OPTIONS_SIZE_PAGE,
} from '../../library/constants';

function PageSizeSelect({ setPageSize, wrapperStyle }) {
  return (
    <Select
      className={wrapperStyle}
      defaultValue={COUNT_DEFAULT_SIZE_PAGE}
      style={{ width: 120 }}
      onChange={setPageSize}
    >
      {OPTIONS_SIZE_PAGE.map((elem) => (
        <Select.Option value={elem}>{elem}</Select.Option>
      ))}
    </Select>
  );
}

PageSizeSelect.propTypes = {
  setPageSize: PropTypes.func,
  wrapperStyle: PropTypes.string,
};
PageSizeSelect.defaultProps = {
  wrapperStyle: '',
  setPageSize: () => {
    console.log('Не передана функция setPageSize');
  },
};

export default React.memo(PageSizeSelect);
