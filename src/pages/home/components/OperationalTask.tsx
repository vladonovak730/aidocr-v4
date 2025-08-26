import { OPERATION_TASKS } from './constants';
import { Divider } from '../../../components/ui/Divider';
import { Title } from '../../../components/ui/Title';
import { SubTitle } from '../../../components/ui/SubTitle';

export const OperationalTask = () => {
  return (
    <div className="4xl:py-20 2xl:py-16 md:py-12.5 py-10 bg-blue">
      <div className="container">
        <div className="md:w-[60%] pt-16 flex flex-col gap-8">
          <Title>Aidocr is your personal assistant for operational task</Title>
          <SubTitle>
            Stop searching – start finding. Aidocr easily connects to your
            systems and makes your data truly accessible. From technical plans
            to BIM, everything becomes searchable and usable - through one
            unified chat-interface.
          </SubTitle>
        </div>

        <div className="my-7.5 gap-x-9 xl:gap-y-7.5 grid xl:grid-cols-2 items-start justify-start max-w-full">
          {OPERATION_TASKS.map((task) => (
            <div
              key={task.title}
              className="flex flex-col xl:items-start xl:justify-center items-center "
            >
              <div>
                <Divider />
                <div className="font-bold xl:text-xl lg:text-lg text-base mb-1 md:text-left text-center">
                  {task.title}
                </div>
                <div className="font-normal xl:text-lg lg:text-base text-[15px] md:text-left text-center">
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
