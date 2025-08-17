import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ISubTitleProps extends PropsWithChildren {
  className?: string;
}

export const SubTitle: FC<ISubTitleProps> = ({ children, className }) => {
  return (
    <h4 className={clsx('md:text-left text-center lg:text-2xl text-lg 4xl:mt-0 -mt-4 xl:!mb-10 !mb-7.5 !text-black font-normal', className)}>
      {children}
    </h4>
  );
};
