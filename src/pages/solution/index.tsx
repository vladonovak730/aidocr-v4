import { Section } from '../../components/section';
import { RightChoice } from './components/RightChoice';
import { SolutionsList } from './components/SolutionList';
import { UniqueReason } from './components/UniqueReason';
import { UserFocus } from './components/UserFocus';

export const SolutionPage = () => {
  return (
    <>
      <Section>
        <div className="container">
          <div className="2xl:w-[60%] 2xl:py-0 py-[40px]">
            <br />
            <br />
            <h1 className="title 2xl:text-left text-center">
              What Aidocr <br /> Can Do for You
            </h1>
            <br />
            <p className="2xl:text-left text-center sub-title">
              Aidocr works like an intelligent assistant for all operational
              tasks across all data sources. Aidocr makes you smarter and
              significantly faster by enabling you to search all sources, tap
              into your entire knowledge, visualize both structured and
              unstructured data, and automate complete processes.
            </p>
          </div>
        </div>
      </Section>
      <SolutionsList />
      <UserFocus />
      <UniqueReason />
      <RightChoice />
    </>
  );
};
