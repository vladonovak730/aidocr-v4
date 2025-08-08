import clsx from "clsx";
import type { FC } from "react";

interface IDividerProps {
  className?: string;
}

export const Divider: FC<IDividerProps> = ({ className}) => {
  return (
    <hr className={clsx("border-none h-[1px] p-0 bg-divider my-[15px] w-full", className)}></hr>
  );
}