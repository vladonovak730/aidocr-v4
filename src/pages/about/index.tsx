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
          <div className="2xl:w-[60%] h-full flex flex-col 2xl:py-0 py-[40px]">
            <br />
            <br />
            <Title>
              We understand the complexity of digitizing a whole industry
            </Title>
            <br />
            <SubTitle>
              The AEC/O industry works with a wide range of very specific data
              sources that are disconnected by several expert tools. This leads
              to huge inefficiencies and an unsolved complexity at work,
              resulting in a 90% loss of building data during its lifecycle. We
              want to change that with Aidocr.
            </SubTitle>
          </div>

          <div className="grid 4xl:grid-cols-3 2xl:grid-cols-2 gap-x-4 gap-y-4 my-4">
            {COMPLEXITIES.map(item => (
              <Card key={item.title}>
                <div>
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Escalating operational costs</div>
                  <div className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">Inefficient, manual processes drive up labor costs, increase error rates, and cause delays of up to 30%. This results in $177b in avoidable losses every year.</div>
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
          <div className="2xl:w-[60%] h-full flex flex-col">
            <Title>
              We share a big Vision
            </Title>
            <br />
            <SubTitle>
              We don't believe in AI replacing millions of jobs, but rather
              improving the way people work in their day-to-day tasks. That's
              why we aim to become the industry standard for building
              intelligence with Aidocr. To enable everyone in the AEC/O industry
              to run more intelligent and efficient operations.
            </SubTitle>
          </div>

          <div className="flex justify-between gap-[50px] 2xl:flex-row flex-col">
            <div className="2xl:flex-[0.5] 2xl:w-full xl:w-[70%] xl:mx-auto w-[90%]">
              <img
                src="/assets/static/images/v4/escalator.png"
                alt="workflow"
              />
            </div>
            <div className="workflow-content flex flex-col 2xl:gap-[33.6px]">
              {VERSION_OPTIONS.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <Divider />
                  <h5 className="2xl:text-left text-center">{item.title}</h5>
                  <p className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px] 2xl:text-left text-center">
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
