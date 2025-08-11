import { OPERATION_TASKS } from './constants';
import { Divider } from '../../../components/ui/Divider';
import { Title } from '../../../components/ui/Title';
import { SubTitle } from '../../../components/ui/SubTitle';

export const OperationalTask = () => {
  return (
    <div className="4xl:py-[80px] 2xl:py-[65px] md:py-[50px] py-[40px] bg-blue">
      <div className="container">
        <div className="md:w-[60%] md:py-0 py-[40px]">
          <Title>
            Aidocr is your personal assistant for operational task
          </Title>
          <br />
          <SubTitle>
            Stop searching – start finding. Aidocr easily connects to your
            systems and makes your data truly accessible. From technical plans
            to BIM, everything becomes searchable and usable - through one
            unified chat-interface.
          </SubTitle>
        </div>

        <div className="my-4 gap-x-[36px] gap-y-4 grid xl:grid-cols-2 items-start justify-start max-w-full">
          {OPERATION_TASKS.map((task) => (
            <div
              key={task.title}
              className="flex flex-col xl:items-start xl:justify-center items-center"
            >
              <div>
                <Divider />
                <div className="font-bold xl:text-[20px] lg:text-[18px] text-[16px] mb-0.5">
                  {task.title}
                </div>
                <div className="font-normal xl:text-[18px] lg:text-[16px] text-[15px]">
                  {task.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
