import { IMMEDIATE_VALUES } from './constants';
import { Section } from '../../../components/section';
import { Card } from '../../../components/ui/Card';
import { Title } from '../../../components/ui/Title';
import { SubTitle } from '../../../components/ui/SubTitle';

export const ImmediateValue = () => {
  return (
    <Section>
      <div className="container flex flex-col gap-7.5">
        <div className="md:w-[60%] md:py-0 py-10 flex flex-col gap-8">
          <Title>Immediate value simply by working with Aidocr</Title>
          <SubTitle>
            Stop searching – start finding. Aidocr easily connects to your
            systems and makes your data truly accessible. From technical plans
            to BIM, everything becomes searchable and usable - through one
            unified chat-interface.
          </SubTitle>
        </div>
        <div className="mt-7.5 gap-x-9 gap-y-7.5 grid xl:grid-cols-2 items-start justify-start max-w-full">
          {IMMEDIATE_VALUES.map((item) => (
            <Card key={item.value} className="!bg-transparent !p-0">
              <div className="w-full">
                <h3 className="font-bold leading-[1.11] text-left 4xl:text-[45px] 3xl:text-[42px] xl:text-[38px] lg:text-[32px] text-[26px] 4xl:!mb-[50px] lg:!mb-7.5 !mb-5">
                  {item.value}
                </h3>
                <p className="font-bold xl:text-xl lg:text-lg text-base mb-1">
                  {item.title}
                </p>
                <p className="font-normal xl:text-lg lg:text-base text-[15px]">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
