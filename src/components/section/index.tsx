import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ISectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

export const Section: FC<ISectionProps> = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={clsx(
        '7xl:py-[80px] 5xl:py-[65px] 2xl:py-[50px] py-[40px]',
        className,
      )}
    >
      {children}
    </div>
  );
};
