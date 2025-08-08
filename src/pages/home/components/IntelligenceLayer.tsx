import { Link } from "react-router-dom";
import {Divider} from "../../../components/ui/Divider.tsx";

export const IntelligenceLayer = () => {
  return (
    <div className="!pt-[70px]">
      <div className="container">
        <div className="grid 2xl:grid-cols-2 items-center">
          <div className="flex flex-col justify-center 2xl:py-0 py-[40px] 2xl:items-start items-center">
            <h1 className="title 2xl:text-left text-center">
              The Intelligence Layer for Common Building Data
            </h1>
            <br/>
            <p className="2xl:text-left text-center description">
              Aidocr is the first intelligent Assistant built for the AEC/O industry that understands all specific
              data sources. Search, act, visualize and automate across and between BIM, documents, plans, databases,
              and more. Work like never before - with Aidocr.
            </p>
            <img src="/assets/static/images/v4/sketchofbuilding.png" alt="Aidocr, intelligence layer for AECO"
                 className="2xl:hidden block w-1/2 mx-auto"/>
            {/* <br /> */}
            <button className="explore-button text-[12px] w-20 bg-white border-none p-0 text-left">
              <a href="#explore">
                Explore
                <Divider className="!my-[8px]" />
              </a>
            </button>
          </div>
          <div>
            <img src="/assets/static/images/v4/sketchofbuilding.png" alt="Aidocr, intelligence layer for AECO"
                 className="2xl:block hidden"/>
          </div>
        </div>
      </div>
    </div>
  );
}