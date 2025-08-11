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
                className="flex justify-between gap-[50px] md:flex-row flex-col"
              >
                <div className="md:flex-[0.5] md:w-full sm:w-[70%] sm:mx-auto w-[90%]">
                  <img src={item.image} alt="workflow" />
                </div>
                <div className="workflow-content">
                  <div className="flex flex-col gap-2">
                    <p className="text-title mb-2 text-[0.83em] font-bold md:text-left text-center">
                      {item.title}
                    </p>
                    <p className="xl:text-[18px] font-normal lg:text-[16px] text-[15px] md:text-left text-center">
                      {item.description}
                    </p>
                    <ul className="pl-2 list-disc">
                      <li className="xl:text-[18px] font-normal lg:text-[16px] text-[15px]">
                        Reads various formats: PDFs, Excel, emails, Word, 2D/3D
                        plans, BIM models, IoT systems, and SQL databases.
                      </li>

                      <li className="xl:text-[18px] font-normal lg:text-[16px] text-[15px]">
                        Uses a proprietary AECO-specific ontology to
                        automatically understand, classify and structure
                        fragmented data through semantic file search
                      </li>

                      <li className="xl:text-[18px] font-normal lg:text-[16px] text-[15px]">
                        Detects relationships, linking technical and commercial
                        information to eliminate manual sorting.
                      </li>
                      <li className="xl:text-[18px] font-normal lg:text-[16px] text-[15px]">
                        Connects and shares with Sharepoint, Onedrive,
                        GoogleDrive, Emails, Oracle DB, and mutch more
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {index < SOLUTIONS.length - 1 && (
                <>
                  <br />
                  <Divider />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};
