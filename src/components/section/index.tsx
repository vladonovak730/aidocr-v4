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
        '4xl:py-20 2xl:py-16 md:py-12.5 py-10',
        className,
      )}
    >
      {children}
    </div>
  );
};
