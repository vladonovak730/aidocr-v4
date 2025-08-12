import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface ITitleProps extends PropsWithChildren {
  className?: string;
}

export const Title: FC<ITitleProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        'leading-[1.11] 4xl:text-[55px] 4xl:mb-[50px] 3xl:text-[42px] xl:text-[38px] lg:text-[32px] lg:mb-[42px] xs:text-[30px] xs:mb-4 text-[26px] mb-[20px] md:text-left text-center',
        className,
      )}
    >
      {children}
    </h1>
  );
};
