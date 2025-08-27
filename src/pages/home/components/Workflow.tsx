import { WORKFLOW_ITEMS } from './constants';
import { Section } from '../../../components/section';
import { Card } from '../../../components/ui/Card';
import { SubTitle } from '../../../components/ui/SubTitle';
import { Title } from '../../../components/ui/Title';

export const Workflow = () => {
  return (
    <Section id="explore">
      <div className="container flex flex-col py-16">
        <div className="flex flex-col gap-8">
          <Title className="!text-center">
            Built for everyone in engineering, construction, and operations of
            buildings
          </Title>
          <SubTitle className="!text-center">
            Whether you’re developing projects, coordinating construction sites or
            operating buildings – Aidocr gives you instant access to the knowledge
            you need to act.
          </SubTitle>
        </div>
        <div className="flex flex-col gap-16 mt-7.5">
          <img
            src="/assets/static/images/v4/aidocr_dashboard.png"
            alt="Workflow"
          ></img>
          <div className="mt-7.5 gap-x-9 gap-y-7.5 items-start justify-start max-w-full grid md:grid-cols-2">
            {WORKFLOW_ITEMS.map((task) => (
              <Card key={task.title} className="!bg-transparent !p-0">
                <div>
                  <div className="text-title font-bold xl:text-xl lg:text-lg text-base mb-4 md:text-left text-center">
                    {task.title}
                  </div>
                  <div className="font-normal xl:text-lg lg:text-base text-[15px] md:text-left text-center">
                    {task.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
