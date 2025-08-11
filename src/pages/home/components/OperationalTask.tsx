import { OPERATION_TASKS } from './constants';
import { Divider } from '../../../components/ui/Divider';

export const OperationalTask = () => {
  return (
    <div className="7xl:py-[80px] 5xl:py-[65px] 2xl:py-[50px] py-[40px] bg-blue">
      <div className="container">
        <div className="2xl:w-[60%] 2xl:py-0 py-[40px]">
          <h1 className="title 2xl:text-left text-center">
            Aidocr is your personal assistant for operational task
          </h1>
          <br />
          <h4 className="2xl:text-left text-center sub-title">
            Stop searching – start finding. Aidocr easily connects to your
            systems and makes your data truly accessible. From technical plans
            to BIM, everything becomes searchable and usable - through one
            unified chat-interface.
          </h4>
        </div>

        <div className="my-4 gap-x-[36px] gap-y-4 grid 4xl:grid-cols-2 items-start justify-start max-w-full">
          {OPERATION_TASKS.map((task) => (
            <div
              key={task.title}
              className="flex flex-col 4xl:items-start 4xl:justify-center items-center"
            >
              <div>
                <Divider />
                <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-0.5">
                  {task.title}
                </div>
                <div className="font-normal 4xl:text-[18px] 3xl:text-[16px] text-[15px]">
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
