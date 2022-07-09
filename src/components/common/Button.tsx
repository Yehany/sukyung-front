import React, { MouseEvent } from 'react';

type Props = {
  isDisabled?: boolean;
  text?: string;
  onClick?: () => void;
};

const Button: React.FunctionComponent<Props> = ({
  isDisabled,
  text,
  onClick,
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    if (onClick) onClick();
  };
  return (
    <div className="sk-btn-wrapper">
      <button
        className="sk-btn"
        onClick={handleClick}
        disabled={isDisabled}
        type="button"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
