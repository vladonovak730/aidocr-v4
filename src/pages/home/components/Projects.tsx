import React from 'react';
import { BUILDING_KNOWLEDGE } from './constants';
import { Section } from '../../../components/section';
import { Title } from '../../../components/ui/Title';
import { SubTitle } from '../../../components/ui/SubTitle';

export const Projects = () => {
  return (
    <Section>
      <div className="container">
        <div className="md:w-[60%] md:py-0 py-[40px]">
          <Title>Chat with BIM, your project- or building knowledge</Title>
          <br />
          <SubTitle>
            Aidocr makes every step of your daily work simple and significantly
            faster. Just ask and get reliable and consistent responses.
          </SubTitle>
        </div>
        <br />
        <br />
        {BUILDING_KNOWLEDGE.map((item, index) => (
          <React.Fragment key={item.title}>
            <div
              key={item.title}
              className={`flex justify-between gap-[50px] md:flex-row flex-col-reverse ${index % 2 === 0 ? 'md:flex-row ' : 'md:!flex-row-reverse '}`}
            >
              <div className="md:flex-[0.5] md:w-full sm:w-[70%] sm:mx-auto w-[90%]">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="workflow-content">
                <div className="flex flex-col gap-2">
                  <h5 className="md:text-left text-center">{item.title}</h5>
                  <p className="xl:text-[18px] font-normal lg:text-[16px] text-[15px] md:text-left text-center">
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
