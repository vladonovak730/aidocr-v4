import React from 'react';
import { BUILDING_KNOWLEDGE } from './constants';
import { Section } from '../../../components/section';

export const Projects = () => {
  return (
    <Section>
      <div className="container">
        <div className="2xl:w-[60%] 2xl:py-0 py-[40px]">
          <h1 className="title 2xl:text-left text-center">
            Chat with BIM, your project- or building knowledge
          </h1>
          <br />
          <h4 className="2xl:text-left text-center sub-title">
            Aidocr makes every step of your daily work simple and significantly
            faster. Just ask and get reliable and consistent responses.
          </h4>
        </div>
        <br />
        <br />
        {BUILDING_KNOWLEDGE.map((item, index) => (
          <React.Fragment key={item.title}>
            <div
              key={item.title}
              className={`flex justify-between gap-[50px] 2xl:flex-row flex-col-reverse ${index % 2 === 0 ? '2xl:flex-row ' : '2xl:!flex-row-reverse '}`}
            >
              <div className="2xl:flex-[0.5] 2xl:w-full xl:w-[70%] xl:mx-auto w-[90%]">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="workflow-content">
                <div className="flex flex-col gap-2">
                  <h5 className="2xl:text-left text-center">{item.title}</h5>
                  <p className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px] 2xl:text-left text-center">
                    {item.examples.map((example, ind) => (
                      <React.Fragment key={ind}>
                        <b>{example.question}</b>
                        <br />
                        Answer: {example.answer}
                        {ind < item.examples.length - 1 && (
                          <>
                            <br />
                            <br />
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
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
};
