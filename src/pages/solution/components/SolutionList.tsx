import React from "react";
import { Section } from "../../../components/section";
import { SOLUTIONS } from "./constants";
import {Divider} from "../../../components/ui/Divider.tsx";

export const SolutionsList = () => {
  return (
    <Section>
      <div className="container">
        <div className="">
          {SOLUTIONS.map((item, index) => (
            <React.Fragment key={item.title}>
              <div key={item.title} className="flex justify-between gap-[50px] 2xl:flex-row flex-col">
                <div className="2xl:flex-[0.5] 2xl:w-full xl:w-[70%] xl:mx-auto w-[90%]">
                  <img src={item.image} alt="workflow" />
                </div>
                <div className="workflow-content">
                  <div className="flex flex-col gap-2">
                    <p className="text-title mb-2 text-[0.83em] font-bold 2xl:text-left text-center">{item.title}</p>
                    <p className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px] 2xl:text-left text-center">{item.description}</p>
                    <ul className="pl-2 list-disc">
                      <li className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">
                      Reads various formats: PDFs, Excel, emails, Word, 2D/3D plans, BIM models, IoT systems, and SQL databases.
                      </li>

                      <li className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">
                      Uses a proprietary AECO-specific ontology to automatically understand, classify and structure fragmented data through semantic file search
                      </li>

                      <li className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">
                      Detects relationships, linking technical and commercial information to eliminate manual sorting.
                      </li>
                      <li className="4xl:text-[18px] font-normal 3xl:text-[16px] text-[15px]">
                      Connects and shares with Sharepoint, Onedrive, GoogleDrive, Emails, Oracle DB, and mutch more
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
}