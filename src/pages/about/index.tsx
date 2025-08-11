import { Section } from '../../components/section';
import { VERSION_OPTIONS } from './constants';
import { Divider } from '../../components/ui/Divider';

export const AboutPage = () => {
  return (
    <>
      <Section>
        <div className="container flex flex-col">
          <div className="2xl:w-[60%] h-full flex flex-col 2xl:py-0 py-[40px]">
            <br />
            <br />
            <h1 className="title 2xl:text-left text-center">
              We understand the complexity of digitizing a whole industry
            </h1>
            <br />
            <h4 className="2xl:text-left text-center sub-title">
              The AEC/O industry works with a wide range of very specific data
              sources that are disconnected by several expert tools. This leads
              to huge inefficiencies and an unsolved complexity at work,
              resulting in a 90% loss of building data during its lifecycle. We
              want to change that with Aidocr.
            </h4>
          </div>

          <div className="flex 4xl:flex-wrap 4xl:flex-row flex-col flex-nowrap gap-x-[58px] gap-y-4 my-4">
            <div className="p-[24px] bg-primary basis-[30%]">
              <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">
                Escalating operational costs
              </div>
              <div className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">
                Inefficient, manual processes drive up labor costs, increase
                error rates, and cause delays of up to 30%. This results in
                $177b in avoidable losses every year.
              </div>
            </div>
            <div className="p-[24px] bg-primary basis-[30%]">
              <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">
                Missing interoperability of systems and data
              </div>
              <div className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">
                Up to 90% of critical data remains buried and disconnected in
                silos, blocking smart decision-making and potential savings.
              </div>
            </div>
            <div className="p-[24px] bg-primary basis-[30%]">
              <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">
                Compliance & regulatory risks
              </div>
              <div className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">
                Complex and hidden data lead to missed deadlines, costly
                maintenance, and jeopardize Net-Zero, incurring legal penalties.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="container">
        <Divider />
      </div>

      <Section>
        <div className="container flex flex-col">
          <div className="2xl:w-[60%] h-full flex flex-col">
            <h1 className="title 2xl:text-left text-center 2xl:py-0 py-[40px]">
              We share a big Vision
            </h1>
            <br />
            <p className="2xl:text-left text-center sub-title">
              We don't believe in AI replacing millions of jobs, but rather
              improving the way people work in their day-to-day tasks. That's
              why we aim to become the industry standard for building
              intelligence with Aidocr. To enable everyone in the AEC/O industry
              to run more intelligent and efficient operations.
            </p>
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
