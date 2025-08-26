import { Section } from '../../components/section';
import { COMPLEXITIES, VERSION_OPTIONS } from './constants';
import { Divider } from '../../components/ui/Divider';
import { Card } from '../../components/ui/Card';
import { Title } from '../../components/ui/Title';
import { SubTitle } from '../../components/ui/SubTitle';

export const AboutPage = () => {
  return (
    <>
      <Section>
        <div className="container flex flex-col">
          <div className="md:w-[60%] h-full flex flex-col pt-16 gap-8">
            <Title>
              We understand the complexity of digitizing a whole industry
            </Title>
            <SubTitle>
              The AEC/O industry works with a wide range of very specific data
              sources that are disconnected by several expert tools. This leads
              to huge inefficiencies and an unsolved complexity at work,
              resulting in a 90% loss of building data during its lifecycle. We
              want to change that with Aidocr.
            </SubTitle>
          </div>

          <div className="grid xl:grid-cols-3 gap-x-7.5 gap-y-7.5 my-7.5">
            {COMPLEXITIES.map((item) => (
              <Card key={item.title}>
                <div>
                  <div className="font-bold xl:text-xl lg:text-lg text-base mb-0.5">
                    {item.title}
                  </div>
                  <div className="xl:text-lg font-normal lg:text-base text-[15px]">
                    {item.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <div className="container">
        <Divider />
      </div>

      <Section>
        <div className="container flex flex-col">
          <div className="md:w-[60%] h-full flex flex-col gap-8">
            <Title>We share a big Vision</Title>
            <SubTitle>
              We don't believe in AI replacing millions of jobs, but rather
              improving the way people work in their day-to-day tasks. That's
              why we aim to become the industry standard for building
              intelligence with Aidocr. To enable everyone in the AEC/O industry
              to run more intelligent and efficient operations.
            </SubTitle>
          </div>

          <div className="flex justify-between gap-12.5 md:flex-row flex-col">
            <div className="md:flex-[0.5] md:w-full sm:w-[70%] sm:mx-auto w-[90%]">
              <img
                src="/assets/static/images/v4/escalator.png"
                alt="workflow"
              />
            </div>
            <div className="workflow-content flex flex-col md:gap-8">
              {VERSION_OPTIONS.map((item) => (
                <div key={item.title} className="flex flex-col gap-4">
                  <Divider />
                  <h5 className="md:text-left text-center mb-2">{item.title}</h5>
                  <p className="xl:text-lg font-normal lg:text-base text-[15px] md:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
