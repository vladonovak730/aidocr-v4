import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface ITitleProps extends PropsWithChildren {
  className?: string;
}

export const Title: FC<ITitleProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        'leading-[1.11] font-[300] 4xl:text-[55px] 4xl:mb-12.5 3xl:text-[42px] xl:text-[38px] lg:text-[32px] lg:mb-10.5 xs:text-[30px] xs:mb-7.5 text-[26px] mb-5 md:text-left text-center',
        className,
      )}
    >
      {children}
    </h1>
  );
};
