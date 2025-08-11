import type { FC, PropsWithChildren } from "react";

export const SubTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h4 className="md:text-left text-center lg:text-[24px] text-[18px] 4xl:mt-0 mt-[-15px] xl:!mb-[40px] mb-4 !text-black font-normal">
      {children}
    </h4>
  );
}