import clsx from "clsx";
import { type PropsWithChildren, type FC } from "react";

interface ICardProps extends PropsWithChildren {
  className?: string;
}

export const Card: FC<ICardProps> = ({ children, className }) => {
  return (
    <div className={clsx("flex flex-col 4xl:items-start 4xl:justify-center items-center", className)}>
      {children}            
    </div>
  );
}