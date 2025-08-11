import type { FC, PropsWithChildren } from "react";

export const SubTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h4 className="2xl:text-left text-center 3xl:text-[24px] text-[18px] 7xl:mt-0 mt-[-15px] 4xl:!mb-[40px] mb-4 !text-black font-normal">
      {children}
    </h4>
  );
}