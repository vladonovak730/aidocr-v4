import { UNIQUE_REASONS } from "./constants";

export const UniqueReason = () => {
  return (
    <div className="8xl:py-20 6xl:py-16.25 5xl:py-12.5 py-10 ">
      <div className="container">
        <div className="2xl:w-[60%]">
          <h1 className="title 2xl:text-left text-center">
            What makes us unique
          </h1>
          <br />
          <p className="2xl:text-left text-center description">
            Aidocr offers a very unique set of features that go beyond just document search - tailored to enterprise requirements , battle-tested, and grown by the demands of our clients.
          </p>
        </div>
        <div>
          <div className="workflow-layer">
            <div className="workflow-content flex flex-col gap-[33.6px]">
              {UNIQUE_REASONS.map(item => (
                <div key={item.title} className="flex flex-col gap-[15px]">
                  <h5>{item.title}</h5>
                  <p className="text 2xl:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="workflow-image">
              <img src="/assets/static/images/v4/thinking.png" alt="workflow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}