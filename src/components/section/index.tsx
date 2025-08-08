import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface ISectionProps extends PropsWithChildren {
  className?: string;
}

export const Section: FC<ISectionProps> = ({ children, className }) => {
  return (
    <div className={clsx("7xl:py-20 5xl:py-[65px] 2xl:py-[50px] py-10", className)}>
      {children}
    </div>
  );
}