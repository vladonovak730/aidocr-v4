import { WORKFLOW_ITEMS } from "./constants";
import { Section } from "../../../components/section";

export const Workflow = () => {
  return (
    <Section id="explore">
      <div className="container">
        <h1 className="text-center">
          Built for everyone in engineering, construction, and operations of buildings
        </h1>
        <p className="description text">
          Whether you’re developing projects, coordinating construction sites or operating buildings – Aidocr gives you instant access to the knowledge you need to act.
        </p>
        <br />
        <div>
          <img src="/assets/static/images/v4/aidocr_dashboard.png" alt="Workflow"></img>
          <br />
          <br />
          <div className="my-7.5 mr-5 gap-x-9 gap-y-7.5 flex flex-wrap items-start justify-start max-w-full basis-[45%]">
            {WORKFLOW_ITEMS.map((task) => (
              <div key={task.title} className="4xl:basis-[45%] flex flex-col 4xl:items-start 4xl:justify-center items-center basis-[100%]">
                <div>
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-0.5">{task.title}</div>
                  <div className="font-normal 4xl:text-[18px] 3xl:text-[16px] text-[15px]">{task.description}</div>
                </div>              
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}