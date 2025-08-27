import clsx from 'clsx';
import type { FC } from 'react';

interface IDividerProps {
  className?: string;
}

export const Divider: FC<IDividerProps> = ({ className }) => {
  return (
    <hr
      className={clsx(
        'border-none h-0.25 p-0 bg-divider w-full',
        className,
      )}
    ></hr>
  );
};
