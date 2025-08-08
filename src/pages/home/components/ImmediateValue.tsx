import { IMMEDIATE_VALUES } from "./constants";
import { Section } from "../../../components/section";

export const ImmediateValue = () => {
  return (
    <Section>
      <div className="container">
        <div className="2xl:w-[60%]">
          <h1 className="title 2xl:text-left text-center">
            Immediate value simply by working with Aidocr
          </h1>
          <br />
          <p className="2xl:text-left text-center description">
            Stop searching – start finding. Aidocr easily connects to your systems and makes your data truly accessible. From technical plans to BIM, everything becomes searchable and usable - through one unified chat-interface.
          </p>
        </div>
        <br />
        <div className="my-7.5 mr-5 gap-x-9 gap-y-7.5 flex flex-wrap items-start justify-start max-w-full basis-[45%]">
          {IMMEDIATE_VALUES.map(item => (
            <div key={item.value} className="4xl:basis-[45%] flex flex-col 4xl:items-start 4xl:justify-center items-center basis-[100%]">
              <div className="w-full">
                <h3 className="font-bold leading-[1.11] text-left 7xl:text-[45px] 6xl:text-[42px] 4xl:text-[38px] 3xl:text-[32px] text-[26px] 7xl:mb-[50px] 3xl:mb-4 mb-[20px]">{item.value}</h3>
                <p className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-0.5">{item.title}</p>
                <p className="font-normal 4xl:text-[18px] 3xl:text-[16px] text-[15px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}