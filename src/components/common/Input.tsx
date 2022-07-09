import React, { KeyboardEvent, SyntheticEvent } from 'react';

type Props = {
  placeholder?: string;
  type?: string;
  name?: string;
  defaultValue?: string;
  value?: string;
  onClick?: () => void;
  onChange?: (v: string) => void;
  onEnter?: () => void;
  readonly?: boolean;
  length?: number;
};

const SkButton: React.FunctionComponent<Props> = ({
  placeholder,
  type,
  name,
  onClick,
  onChange,
  onEnter,
  defaultValue,
  readonly,
  value,
  length,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) onChange(e.target.value);
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      if (onEnter) onEnter();
    }
  };
  const handleClick = (e: SyntheticEvent): void => {
    console.log(e);
    if (onClick) onClick();
  };
  return (
    <div className="sk-input-wrapper">
      <input
        type={type}
        defaultValue={defaultValue}
        className="sk-input"
        placeholder={placeholder}
        name={name}
        value={value}
        readOnly={readonly}
        maxLength={length}
        onChange={handleChange}
        onKeyUp={handleEnter}
        onClick={handleClick}
      />
    </div>
  );
};
export default SkButton;
