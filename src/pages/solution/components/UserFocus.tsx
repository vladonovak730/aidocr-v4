import { USER_TARGETS } from "./constants";

export const UserFocus = () => {
  return (
    <div className="7xl:py-[80px] 5xl:py-[65px] 2xl:py-[50px] py-[40px] bg-blue">
      <div className="container">
        <div className="2xl:w-[60%] 2xl:py-0 py-[40px]">
          <br />
          <br />
          <h1 className="title 2xl:text-left text-center">
            For whom Aidocr <br/> is made for
          </h1>
          <br />
          <h4 className="2xl:text-left text-center sub-title">
            Whether you’re a planner, general contractor, or facility manager, Aidocr adapts to your role and the relevant task-related data. Aidocr is designed to be flexible and useful for its users from day one, eliminating the need for complex tool training.
          </h4>
        </div>
        <div className="flex flex-col gap-[33.6px]">
          {USER_TARGETS.map(item => (
            <div key={item.title} className="">
              <h5 className="2xl:text-left text-center">{item.title}</h5>
              <div className="flex 4xl:flex-wrap 4xl:flex-row flex-col flex-nowrap gap-x-[58px] gap-y-4 my-4">
                <div className="p-[24px] bg-primary basis-[30%]">
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Problem</div>
                  <div className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">{item.problem}</div>
                </div>
                <div className="p-[24px] bg-primary basis-[30%]">
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Solution</div>
                  <div className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">{item.solution}</div>
                </div>
                <div className="p-[24px] bg-primary basis-[30%]">
                  <div className="font-bold 4xl:text-[20px] 3xl:text-[18px] text-[16px] mb-[2px]">Benefit</div>
                  <div className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px] pl-[24px]">
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