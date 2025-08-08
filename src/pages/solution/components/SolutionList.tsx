import React from "react";
import { Section } from "../../../components/section";
import { SOLUTIONS } from "./constants";

export const SolutionsList = () => {
  return (
    <Section>
      <div className="container">
        <div className="">
          {SOLUTIONS.map((item, index) => (
            <React.Fragment key={item.title}>
              <div key={item.title} className="workflow-layer">
                <div className="workflow-image">
                  <img src={item.image} alt="workflow" />
                </div>
                <div className="workflow-content">
                  <div className="flex flex-col gap-2">
                    <p className="list-title">{item.title}</p>
                    <p className="text 2xl:text-left text-center">{item.description}</p>
                    <ul className="pl-2 list-disc">
                      <li className="workflow__content-list-item text">
                      Reads various formats: PDFs, Excel, emails, Word, 2D/3D plans, BIM models, IoT systems, and SQL databases.
                      </li>

                      <li className="workflow__content-list-item text">
                      Uses a proprietary AECO-specific ontology to automatically understand, classify and structure fragmented data through semantic file search
                      </li>

                      <li className="workflow__content-list-item text">
                      Detects relationships, linking technical and commercial information to eliminate manual sorting.
                      </li>
                      <li className="workflow__content-list-item text">
                      Connects and shares with Sharepoint, Onedrive, GoogleDrive, Emails, Oracle DB, and mutch more
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {index < SOLUTIONS.length - 1 && (
                <>
                  <br />
                  <hr className="divider" />
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