import { JOURNEY } from './constants';
import { Section } from '../../../components/section';
import { Card } from '../../../components/ui/Card';
import { Title } from '../../../components/ui/Title';

export const Journey = () => {
  return (
    <Section>
      <div className="container">
        <Title className="!text-center">
          Your Journey to testdrive aidocr
        </Title>
        <br />
        <div className="my-4 gap-x-[36px] gap-y-4 grid md:grid-cols-2 items-start justify-start max-w-full">
          {JOURNEY.map((item, index) => (
            <Card
              key={item.title}
              className="flex items-start justify-center p-[24px] bg-primary"
            >
              <div>
                <h3 className="font-bold leading-[1.11] text-left 4xl:text-[45px] 3xl:text-[42px] xl:text-[38px] lg:text-[32px] text-[26px] 4xl:mb-[50px] lg:mb-4 mb-[20px]">
                  {index + 1}.
                </h3>
                <div className="font-bold xl:text-[20px] lg:text-[18px] text-[16px] mb-0.5">
                  {item.title}
                </div>
                <div className="font-normal xl:text-[18px] lg:text-[16px] text-[15px]">
                  {item.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="md:flex-[0.5] md:w-full sm:w-[70%] sm:mx-auto w-[90%]">
          <br />
          <img src="/assets/static/images/v4/team2.png" alt="Workflow" />
        </div>
      </div>
    </Section>
  );
};
