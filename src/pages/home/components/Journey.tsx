import { JOURNEY } from './constants';
import { Section } from '../../../components/section';
import { Card } from '../../../components/ui/Card';
import { Title } from '../../../components/ui/Title';
import { CustomButton } from '../../../components/buttons/CustomButton';
import { Link } from 'react-router-dom';

export const Journey = () => {
  return (
    <Section>
      <div className="container flex flex-col gap-8 py-16">
        <Title className="!text-center">Your Journey to testdrive aidocr</Title>
        <div className="my-7.5 gap-x-9 gap-y-7.5 grid md:grid-cols-2 items-start justify-start max-w-full">
          {JOURNEY.map((item, index) => (
            <Card
              key={item.title}
              className="flex items-start justify-center p-6 bg-primary"
            >
              <div>
                <h3 className="font-bold leading-[1.11] text-left 4xl:text-[45px] 3xl:text-[42px] xl:text-[38px] lg:text-[32px] text-[26px] 4xl:!mb-[50px] lg:!mb-7.5 !mb-5">
                  {index + 1}.
                </h3>
                <div className="font-bold xl:text-xl lg:text-lg text-base mb-1">
                  {item.title}
                </div>
                <div className="font-normal xl:text-lg lg:text-base text-[15px]">
                  {item.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Link
          to={"https://app.usemotion.com"}
          target="_blank"
          className="md:w-95 w-full 2xl:text-[17px] text-[15px] button transition duration-300 ease font-semibold py-2.5 px-6 text-center rounded-[8px] border border-solid border-blue-light bg-blue-light text-white hover:text-blue-light hover:bg-white mx-auto"
        >
          Book a meeting
        </Link>
        <div className="md:flex-[0.5] md:w-full sm:w-[70%] mx-auto w-[90%] pt-8">
          <img src="/assets/static/images/v4/team2.png" alt="Workflow" />
        </div>
      </div>
    </Section>
  );
};
