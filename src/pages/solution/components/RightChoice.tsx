import { RIGHT_CHOICES } from "./constants";

export const RightChoice = () => {
  return (
    <div className="8xl:py-20 6xl:py-16.25 5xl:py-12.5 py-10 ">
      <div className="container">
        <div className="2xl:w-[60%]">
          <h1 className="title 2xl:text-left text-center">
            Why Aidocr Is the Right Choice
          </h1>
          <br />
        </div>
        <div>
          <div className="workflow-layer">
            <div className="workflow-image">
              <img src="/assets/static/images/v4/escalator2.png" alt="workflow" />
            </div>
            <div className="workflow-content flex flex-col gap-[33.6px]">
              {RIGHT_CHOICES.map(item => (
                <div key={item.title} className="flex flex-col gap-[15px]">
                  <h5>{item.title}</h5>
                  <p className="text 2xl:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>            
          </div>
        </div>        
      </div>
    </div>
  );
}