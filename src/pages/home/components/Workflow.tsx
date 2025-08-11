import { WORKFLOW_ITEMS } from "./constants";
import { Section } from "../../../components/section";
import { Card } from "../../../components/ui/Card";
import { SubTitle } from "../../../components/ui/SubTitle";
import { Title } from "../../../components/ui/Title";

export const Workflow = () => {
  return (
    <Section id="explore">
      <div className="container">
        <Title className="!text-center">
          Built for everyone in engineering, construction, and operations of
          buildings
        </Title>
        <SubTitle>
          Whether you’re developing projects, coordinating construction sites or
          operating buildings – Aidocr gives you instant access to the knowledge
          you need to act.
        </SubTitle>
        <br />
        <div>
          <img
            src="/assets/static/images/v4/aidocr_dashboard.png"
            alt="Workflow"
          ></img>
          <br />
          <br />
          <div className="my-4 gap-x-[36px] gap-y-4 items-start justify-start max-w-full grid 4xl:grid-cols-2">
            {WORKFLOW_ITEMS.map((task) => (
              <Card key={task.title} className="!bg-transparent !p-0">
                <div>
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-0.5">{task.title}</div>
                  <div className="font-normal 4xl:text-[18px] 3xl:text-[16px] text-[15px]">{task.description}</div>
                </div>              
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
