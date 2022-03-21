import { declOfNumSymbols } from './declOfNumInstances';

/**
 * Combining Validators
 * @param args functions
 * @returns {function(*=): unknown}
 */
export const combiningValidators = (...args) => {
  return (value) => {
    const results = args.map((fn) => fn(value)).filter((elem) => elem);
    return results.length > 0 ? results[0] : undefined;
  };
};

export const isRequired = (value) => (!value ? 'Обязательное значение' : false);

export const isEmail = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email не корректен'
    : false;
};

export const maxValue = (max) => (value) =>
  value && value > max ? `Максимальное значение ${max}` : false;

export const minValue = (min) => (value) =>
  value && value < min ? `Минимальное значение ${min}` : false;

export const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Максимальная длина: ${declOfNumSymbols(max, true)}`
    : undefined;

export const minLength = (min) => (value) =>
  value && value.length < min
    ? `Минимальная длина: ${declOfNumSymbols(min, true)}`
    : undefined;
