import { Divider } from '../../../components/ui/Divider.tsx';
import { SubTitle } from '../../../components/ui/SubTitle.tsx';
import { Title } from '../../../components/ui/Title.tsx';

export const IntelligenceLayer = () => {
  return (
    <div className="!pt-[70px]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-[20px] items-center">
          <div className="flex flex-col justify-center 3xl:py-0 py-[40px] md:items-start items-center">
            <Title>The Intelligence Layer for Common Building Data</Title>
            <br />
            <SubTitle>
              Aidocr is the first intelligent Assistant built for the AEC/O
              industry that understands all specific data sources. Search, act,
              visualize and automate across and between BIM, documents, plans,
              databases, and more. Work like never before - with Aidocr.
            </SubTitle>
            <img
              src="/assets/static/images/v4/sketchofbuilding.png"
              alt="Aidocr, intelligence layer for AECO"
              className="md:hidden block w-[80%] mx-auto mb-4"
            />
            <button className="explore-button text-[12px] w-20 bg-white border-none p-0 cursor-pointer text-left hover:bg-primary hover:text-title transition-colors duration-300">
              <a href="#explore">
                Explore
                <Divider className="!my-[8px]" />
              </a>
            </button>
          </div>
          <div>
            <img
              src="/assets/static/images/v4/sketchofbuilding.png"
              alt="Aidocr, intelligence layer for AECO"
              className="md:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
