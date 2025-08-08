import { JOURNEY } from "./constants";

export const Journey = () => {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title 2xl:text-left text-center">
          Your Journey to testdrive aidocr
        </h3>
        <br />
        <div className="grid-layer">
          {JOURNEY.map((item, index) => (
            <div key={item.title} className="4xl:basis-[45%] basis-[100%] flex items-start justify-center p-[24px] bg-primary">
              <div>
                <h3 className="title2">{index + 1}.</h3>
                <div className="grid-item-title">{item.title}</div>
                <div className="grid-item-text">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="workflow-image">
          <br />
          <img src="/assets/static/images/v4/team2.png" alt="Workflow" />
        </div>
      </div>

    </div>
  );
}