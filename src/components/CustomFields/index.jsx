import {
  Rate as AntdRate,
  Input as AntdInput,
  Checkbox as AntdCheckbox,
} from 'antd';
import { Field } from 'formik';
import React, { useCallback, useState } from 'react';
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
      default:
        break;
    }
    form.setFieldValue(field.name, value);
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
  wrapperStyle = { width: '100%' },
  ...props
}) => {
  const error = errors?.[name];

  return (
    <div className="form-group" style={wrapperStyle}>
      <span>{label}</span>
      <Field {...props} component={component} name={name} />
      <ErrorMessage error={error} />
    </div>
  );
};
