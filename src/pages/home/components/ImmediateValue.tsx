import { IMMEDIATE_VALUES } from "./constants";
import { Section } from "../../../components/section";

export const ImmediateValue = () => {
  return (
    <Section>
      <div className="container">
        <div className="2xl:w-[60%]">
          <h1 className="title 2xl:text-left text-center">
            Immediate value simply by working with Aidocr
          </h1>
          <br />
          <p className="2xl:text-left text-center description">
            Stop searching – start finding. Aidocr easily connects to your systems and makes your data truly accessible. From technical plans to BIM, everything becomes searchable and usable - through one unified chat-interface.
          </p>
        </div>
        <br />
        <div className="grid-layer">
          {IMMEDIATE_VALUES.map(item => (
            <div key={item.value} className="grid-item">
              <div className="w-full">
                <h3 className="title2">{item.value}</h3>
                <p className="grid-item-title">{item.title}</p>
                <p className="grid-item-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}