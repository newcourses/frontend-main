import {
  Rate as AntdRate,
  Input as AntdInput,
  Checkbox as AntdCheckbox,
  Slider as AntdSlider,
  Select as AntdSelect,
} from 'antd';
import { Field } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import css from './index.module.scss';

const standardOnChange =
  (form, field, type = 'input') =>
  (e) => {
    let value = e?.currentTarget?.value || e;
    switch (type) {
      case 'input':
        value = e?.currentTarget?.value;
        break;
      case 'rate':
        value = e;
        break;
      case 'checkbox':
        value = e?.target?.checked;
        break;
      case 'slider':
        value = e;
        break;
      case 'select':
        value = e;
        break;
      default:
        break;
    }
    form.setFieldValue(field.name, value);
  };

export const SelectWithGroups = ({ field, form, list, ...props }) => {
  const onChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  const groups = Object.keys(list);
  const selectGroups = groups.map((group) => (
    <AntdSelect.OptGroup label={group}>
      {list[group].map(({ caption, value }) => (
        <AntdSelect.Option key={value} value={value}>
          {caption}
        </AntdSelect.Option>
      ))}
    </AntdSelect.OptGroup>
  ));
  return (
    <AntdSelect
      style={{ width: '100%' }}
      defaultValue={field.value}
      value={field.value}
      {...props}
      onChange={onChange}
    >
      <>{selectGroups}</>
    </AntdSelect>
  );
};

export const Select = ({ field, form, list: listData, type, ...props }) => {
  const onChange = standardOnChange(form, field, 'select');
  const [list, setList] = useState([]);

  useEffect(() => {
    if (Array.isArray(listData)) {
      const newList = listData.map((elem) => {
        if (typeof elem === 'string') {
          return (
            <AntdSelect.Option key={elem} value={elem}>
              {elem}
            </AntdSelect.Option>
          );
        }
        return (
          <AntdSelect.Option key={elem.value} value={elem.value}>
            {elem.caption}
          </AntdSelect.Option>
        );
      });

      setList(newList);
    } else {
      const newList = Object.keys(listData ?? {}).map((key) => {
        const label = listData[key];
        return (
          <AntdSelect.Option key={key} value={key}>
            {label}
          </AntdSelect.Option>
        );
      });

      setList(newList);
    }
  }, [field.name, listData]);

  return (
    <div className={css.wrapperSelect}>
      <AntdSelect
        style={{ width: '100%' }}
        value={field.value}
        onChange={onChange}
        {...props}
      >
        {list}
      </AntdSelect>
    </div>
  );
};

export const Input = ({ field, form, ...props }) => {
  const onChange = standardOnChange(form, field);
  return (
    <AntdInput
      style={{ width: '100%' }}
      value={field.value}
      onChange={onChange}
      {...props}
    />
  );
};

export const TextArea = ({ field, form, ...props }) => {
  const onChange = standardOnChange(form, field);

  return (
    <AntdInput.TextArea
      defaultValue={field.value}
      style={{ width: '100%' }}
      value={field.value}
      onChange={onChange}
      {...props}
    />
  );
};

export const Rate = ({ field, form, size, ...props }) => {
  const [color, setColor] = useState('#fadb14');
  const determineColor = useCallback((value, currentColor) => {
    const POS_COLOR = 'green';
    const NEU_COLOR = '#fadb14';
    const NEG_COLOR = 'red';

    if (value >= 4) {
      return POS_COLOR;
    }
    if (value < 4 && value >= 2) {
      return NEU_COLOR;
    }
    if (value < 2) {
      return NEG_COLOR;
    }
    return currentColor;
  }, []);

  const onChange = useCallback(
    (value) => {
      const newColor = determineColor(value, color);
      setColor(newColor);
      standardOnChange(form, field, 'rate')(value);
    },
    [color, determineColor, field, form],
  );

  const onHoverChange = useCallback(
    (value) => {
      const newColor = determineColor(value, color);
      setColor(newColor);
    },
    [color, determineColor],
  );
  return (
    <AntdRate
      value={field.value}
      onChange={onChange}
      onHoverChange={onHoverChange}
      style={{ color, fontSize: size }}
      {...props}
    />
  );
};

export const Checkbox = ({ field, form, v, label, ...props }) => {
  const onChange = standardOnChange(form, field, 'checkbox');
  const isChecked = field.value === true;

  return (
    <AntdCheckbox
      className={css.defaultCheckboxStyle}
      style={{ width: '100%' }}
      onChange={onChange}
      checked={isChecked}
      {...props}
    >
      {label}
    </AntdCheckbox>
  );
};

export const Slider = ({
  field,
  form,
  v,
  label,
  prefix,
  min,
  max,
  ...props
}) => {
  const onChange = standardOnChange(form, field, 'slider');
  return (
    <div className={css.wrapperSlider}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          от {field.value?.[0] || min} {prefix}
        </div>
        <div>
          до {field.value?.[1] || max} {prefix}
        </div>
      </div>
      <AntdSlider
        range
        min={min}
        max={max}
        onChange={onChange}
        defaultValue={[1000, 250000]}
        {...props}
      />
    </div>
  );
};

const ErrorMessage = ({ error }) => {
  const style = {
    color: 'red',
    fontSize: 10,
    paddingTop: 5,
  };

  if (!error) return null;

  return <div style={style}>{error}</div>;
};

export const FormGroup = ({
  name,
  label,
  errors,
  component = Input,
  wrapperStyle,
  className,
  ...props
}) => {
  const error = errors?.[name];

  return (
    <div className={`form-group ${className}`} style={wrapperStyle}>
      <span className={css.label}>{label}</span>
      <Field {...props} component={component} name={name} />
      <ErrorMessage error={error} />
    </div>
  );
};
