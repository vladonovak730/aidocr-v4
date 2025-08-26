import React from 'react';
import { BUILDING_KNOWLEDGE } from './constants';
import { Section } from '../../../components/section';
import { Title } from '../../../components/ui/Title';
import { SubTitle } from '../../../components/ui/SubTitle';

export const Projects = () => {
  return (
    <Section>
      <div className="container flex flex-col gap-8">
        <div className="md:w-[60%] md:py-0 py-10 flex flex-col gap-8">
          <Title>Chat with BIM, your project- or building knowledge</Title>
          <SubTitle>
            Aidocr makes every step of your daily work simple and significantly
            faster. Just ask and get reliable and consistent responses.
          </SubTitle>
        </div>
        <div className="flex flex-col gap-16">
          {BUILDING_KNOWLEDGE.map((item, index) => (
            <React.Fragment key={item.title}>
              <div
                key={item.title}
                className={`flex justify-between gap-12.5 md:flex-row flex-col-reverse ${index % 2 === 0 ? 'md:flex-row ' : 'md:!flex-row-reverse '}`}
              >
                <div className="md:flex-[0.5] md:w-full sm:w-[70%] mx-auto w-[90%]">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="workflow-content">
                  <div className="flex flex-col gap-4">
                    <h5 className="mb-2">{item.title}</h5>
                    <div className="flex flex-col gap-8">
                      {item.examples.map((example, ind) => (
                        <p key={ind} className="xl:text-lg font-normal lg:text-base text-[15px]">
                          <b>{example.question}</b>
                          <br />
                          Answer: {example.answer}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};
