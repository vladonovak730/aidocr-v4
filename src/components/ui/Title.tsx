import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

interface ITitleProps extends PropsWithChildren {
  className?: string;
}

export const Title: FC<ITitleProps> = ({ children, className }) => {
  return (
    <h1 className={clsx("leading-[1.11] 7xl:text-[55px] 7xl:mb-[50px] 6xl:text-[42px] 4xl:text-[38px] 3xl:text-[32px] 3xl:mb-[42px] xs:text-[30px] xs:mb-4 text-[26px] mb-[20px] 2xl:text-left text-center", className)}>
      {children}
    </h1>
  );
}