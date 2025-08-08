import { OPERATION_TASKS } from "./constants";

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

        <div className="grid-layer">
          {OPERATION_TASKS.map((task) => (
            <div key={task.title} className="grid-item">
              <div>
                <hr className="divider"></hr>
                <div className="grid-item-title">{task.title}</div>
                <div className="grid-item-text">{task.description}</div>
              </div>              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}