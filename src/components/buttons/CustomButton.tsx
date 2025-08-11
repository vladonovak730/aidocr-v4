import type { ReactElement } from 'react';
import clsx from 'clsx';

// TODO: Add button attrs from default

export interface ButtonProps {
  title?: string | ReactElement;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const CustomButton: React.FC<ButtonProps> = ({
  title,
  type,
  className,
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      className={clsx('cursor-pointer', className)}
      onClick={(event) => !disabled && onClick && onClick(event)}
      type={type}
      {...(disabled && { disabled })}
    >
      {children ?? title}
    </button>
  );
};
