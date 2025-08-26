import React from 'react';
import { Section } from '../../../components/section';
import { SOLUTIONS } from './constants';
import { Divider } from '../../../components/ui/Divider';

export const SolutionsList = () => {
  return (
    <Section>
      <div className="container">
        <div className="">
          {SOLUTIONS.map((item, index) => (
            <React.Fragment key={item.title}>
              <div
                key={item.title}
                className="flex justify-between gap-12.5 md:flex-row flex-col py-4"
              >
                <div className="md:flex-[0.5] md:w-full sm:w-[70%] sm:mx-auto w-[90%]">
                  <img src={item.image} alt="workflow" />
                </div>
                <div className="workflow-content">
                  <div className="flex flex-col gap-4">
                    <p className="text-title mb-4 text-2xl font-bold md:text-left text-center">
                      {item.title}
                    </p>
                    <p className="xl:text-lg font-normal lg:text-base text-[15px] md:text-left text-center">
                      {item.description}
                    </p>
                    <ul className="pl-4 list-disc">
                      {item.solutions.map(solution => (
                        <li key={solution} className="xl:text-lg font-normal lg:text-base text-[15px]">
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {index < SOLUTIONS.length - 1 && (
                  <Divider className="!my-12" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};
