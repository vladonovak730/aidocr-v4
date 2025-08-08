import { OPERATION_TASKS } from "./constants";
import {Divider} from "../../../components/ui/Divider.tsx";

export const OperationalTask = () => {
  return (
    <div className="8xl:py-20 6xl:py-16.25 5xl:py-12.5 py-10 bg-blue">
      <div className="container">
        <div className="2xl:w-[60%]">
          <h1 className="title 2xl:text-left text-center">
            Aidocr is your personal assistant for operational task
          </h1>
          <br />
          <p className="2xl:text-left text-center description">
            Stop searching – start finding. Aidocr easily connects to your systems and makes your data truly accessible. From technical plans to BIM, everything becomes searchable and usable - through one unified chat-interface.
          </p>
        </div>

        <div className="my-7.5 mr-5 gap-x-9 gap-y-7.5 flex flex-wrap items-start justify-start max-w-full basis-[45%]">
          {OPERATION_TASKS.map((task) => (
            <div key={task.title} className="4xl:basis-[45%] flex flex-col 4xl:items-start 4xl:justify-center items-center basis-[100%]">
              <div>
                <Divider />
                <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-0.5">{task.title}</div>
                <div className="font-normal 4xl:text-[18px] 3xl:text-[16px] text-[15px]">{task.description}</div>
              </div>              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}