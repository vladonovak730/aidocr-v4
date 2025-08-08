import { USER_TARGETS } from "./constants";

export const UserFocus = () => {
  return (
    <div className="8xl:py-20 6xl:py-16.25 5xl:py-12.5 py-10 bg-blue">
      <div className="container">
        <div className="2xl:w-[60%]">
          <br />
          <br />
          <h1 className="title 2xl:text-left text-center">
            For whom Aidocr <br/> is made for
          </h1>
          <br />
          <p className="2xl:text-left text-center description">
            Whether you’re a planner, general contractor, or facility manager, Aidocr adapts to your role and the relevant task-related data. Aidocr is designed to be flexible and useful for its users from day one, eliminating the need for complex tool training.
          </p>
        </div>
        <div className="flex flex-col gap-[33.6px]">
          {USER_TARGETS.map(item => (
            <div key={item.title} className="">
              <h5>{item.title}</h5>
              <div className="flex 4xl:flex-wrap 4xl:flex-row flex-col flex-nowrap gap-x-[86px] gap-y-[30px] my-[30px] mr-[20px]">
                <div className="p-[24px] bg-primary basis-[28%]">
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Problem</div>
                  <div className="text">{item.problem}</div>
                </div>
                <div className="p-[24px] bg-primary basis-[28%]">
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Solution</div>
                  <div className="text">{item.solution}</div>
                </div>
                <div className="p-[24px] bg-primary basis-[28%]">
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Benefit</div>
                  <div className="text pl-[24px]">
                    <ul className="list-disc">
                      {item.benefit.map((ben, ind) => (
                        <li key={ind}>{ben}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}