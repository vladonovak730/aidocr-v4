import { Divider } from '../../../components/ui/Divider.tsx';
import { SubTitle } from '../../../components/ui/SubTitle.tsx';
import { Title } from '../../../components/ui/Title.tsx';

export const IntelligenceLayer = () => {
  return (
    <div className="!pt-17.5">
      <div className="4xl:py-20 2xl:py-16 md:py-12.5 py-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div className="flex flex-col justify-between h-full 5xl:pb-2 pt-16 py-10 md:items-start items-center">
              <div className="flex flex-col justify-center md:items-start items-center gap-8">
                <Title>The Intelligence Layer for Common Building Data</Title>
                <SubTitle>
                  Aidocr is the first intelligent Assistant built for the AEC/O
                  industry that understands all specific data sources. Search, act,
                  visualize and automate across and between BIM, documents, plans,
                  databases, and more. Work like never before - with Aidocr.
                </SubTitle>
              </div>

              <img
                src="/assets/static/images/v4/sketchofbuilding.png"
                alt="Aidocr, intelligence layer for AECO"
                className="md:hidden block w-[80%] mx-auto mb-7.5"
              />
              <button className="explore-button text-xs w-37.5 bg-white border-none p-0 cursor-pointer text-left hover:bg-primary hover:text-title transition-colors duration-300">
                <a href="#explore">
                  Explore
                  <Divider className="!my-2" />
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
    </div>
  );
};
