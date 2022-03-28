import React from 'react';
import cn from 'classnames';
import css from './index.module.scss';

function CustomButton({
  width,
  height,
  onClick,
  children,
  className,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      style={{ width, height }}
      className={cn(css.button, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default React.memo(CustomButton);
