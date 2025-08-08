import { Section } from "../../components/section";
import { VERSION_OPTIONS } from "./constants";
import { Layout } from "../../components/layout";
import {Divider} from "../../components/ui/Divider.tsx";

export const AboutPage = () => {
  return (
    <Layout>
      <Section>
        <div className="container flex flex-col">
          <div className="2xl:w-[60%] h-full flex flex-col">
            <br />
            <br />
            <h1 className="title 2xl:text-left text-center">
              We understand the complexity of digitizing a whole industry
            </h1>
            <br />
            <p className="2xl:text-left text-center description">
              The AEC/O industry works with a wide range of very specific data sources that are disconnected by several expert tools. This leads to huge inefficiencies and an unsolved complexity at work, resulting in a 90% loss of building data during its lifecycle. We want to change that with Aidocr.
            </p>
          </div>

          <div className="flex 4xl:flex-wrap 4xl:flex-row flex-col flex-nowrap gap-x-[86px] gap-y-[30px] my-[30px] mr-[20px]">
            <div className="p-[24px] bg-primary basis-[28%]">
              <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Escalating operational costs</div>
              <div className="text">Inefficient, manual processes drive up labor costs, increase error rates, and cause delays of up to 30%. This results in $177b in avoidable losses every year.</div>
            </div>
            <div className="p-[24px] bg-primary basis-[28%]">
              <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Missing interoperability of systems and data</div>
              <div className="text">Up to 90% of critical data remains buried and disconnected in silos, blocking smart decision-making and potential savings.</div>
            </div>
            <div className="p-[24px] bg-primary basis-[28%]">
              <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Compliance & regulatory risks</div>
              <div className="text">
                Complex and hidden data lead to missed deadlines, costly maintenance, and jeopardize Net-Zero, incurring legal penalties.
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
            <h1 className="title 2xl:text-left text-center">
              We share a big Vision
            </h1>
            <br />
            <p className="2xl:text-left text-center description">
              We don't believe in AI replacing millions of jobs, but rather improving the way people work in their day-to-day tasks. That's why we aim to become the industry standard for building intelligence with Aidocr. To enable everyone in the AEC/O industry to run more intelligent and efficient operations.
            </p>
          </div>

          <div className="workflow-layer">
            <div className="workflow-image">
              <img src="/assets/static/images/v4/escalator.png" alt="workflow" />
            </div>
            <div className="workflow-content flex flex-col gap-[33.6px]">
              {VERSION_OPTIONS.map(item => (
                <div key={item.title} className="flex flex-col gap-[15px]">
                  <Divider />
                  <h5>{item.title}</h5>
                  <p className="text">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>            
          </div>       
        </div>
      </Section>
    </Layout>
  );
} 