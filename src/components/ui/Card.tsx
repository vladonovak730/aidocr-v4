import clsx from 'clsx';
import { type PropsWithChildren, type FC } from 'react';

interface ICardProps extends PropsWithChildren {
  className?: string;
}

export const Card: FC<ICardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'flex items-start justify-center p-[24px] bg-primary',
        className,
      )}
    >
      {children}
    </div>
  );
};
