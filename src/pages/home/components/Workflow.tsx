import { WORKFLOW_ITEMS } from "./constants";

export const Workflow = () => {
  return (
    <div className="section" id="explore">
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
          <div className="grid-layer">
            {WORKFLOW_ITEMS.map((task) => (
              <div key={task.title} className="grid-item">
                <div>
                  <div className="grid-item-title">{task.title}</div>
                  <div className="grid-item-text">{task.description}</div>
                </div>              
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}