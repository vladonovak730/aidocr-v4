import React from "react";
import { BUILDING_KNOWLEDGE } from "./constants";
import { Section } from "../../../components/section";

export const Projects = () => {
  return (
    <Section>
      <div className="container">
        <div className="2xl:w-[60%]">
          <h1 className="title 2xl:text-left text-center">
            Chat with BIM, your project- or building knowledge
          </h1>
          <br />
          <p className="2xl:text-left text-center description">
            Aidocr makes every step of your daily work simple and significantly faster. Just ask and get reliable and consistent responses.
          </p>
        </div>
        <br />
        <br />
        {BUILDING_KNOWLEDGE.map((item, index) => (
          <React.Fragment key={item.title}>
            <div key={item.title} className={`workflow-layer ${index % 2 === 0 ? "2xl:flex-row flex-col" : "2xl:!flex-row-reverse" }`}>
              <div className="workflow-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="workflow-content">
                <div className="flex flex-col gap-[15px]">
                  <h5>{item.title}</h5>
                  <p className="text 2xl:text-left text-center">
                    {item.examples.map((example, ind) => (
                      <React.Fragment key={ind}>
                        <b>{example.question}</b>
                        <br/>
                        Answer: {example.answer}
                        {ind < item.examples.length - 1 && (
                          <>
                            <br/>
                            <br/>
                          </>                        
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            {index < BUILDING_KNOWLEDGE.length - 1 && (
              <>
                <br/>
                <br/>
              </>                        
            )}
          </React.Fragment>          
        ))}
      </div>
    </Section>
  );
}