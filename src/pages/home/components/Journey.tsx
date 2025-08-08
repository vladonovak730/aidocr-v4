import { JOURNEY } from "./constants";
import { Section } from "../../../components/section";

export const Journey = () => {
  return (
    <Section>
      <div className="container">
        <h3 className="title 2xl:text-left text-center">
          Your Journey to testdrive aidocr
        </h3>
        <br />
        <div className="grid-layer">
          {JOURNEY.map((item, index) => (
            <div key={item.title} className="4xl:basis-[45%] basis-[100%] flex items-start justify-center p-[24px] bg-primary">
              <div>
                <h3 className="font-bold leading-[1.11] text-left 7xl:text-[45px] 6xl:text-[42px] 4xl:text-[38px] 3xl:text-[32px] text-[26px] 7xl:mb-[50px] 3xl:mb-4 mb-[20px]">{index + 1}.</h3>
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
    </Section>
  );
}