import { Section } from '../../components/section';
import { SubTitle } from '../../components/ui/SubTitle';
import { Title } from '../../components/ui/Title';
import { RightChoice } from './components/RightChoice';
import { SolutionsList } from './components/SolutionList';
import { UniqueReason } from './components/UniqueReason';
import { UserFocus } from './components/UserFocus';

export const SolutionPage = () => {
  return (
    <>
      <div className="!pt-17.5">
        <div className="4xl:pt-20 2xl:pt-16 md:pt-12.5 pt-10">
          <div className="container">
            <div className="md:w-[60%] pt-16 flex flex-col gap-8">
              <Title>
                What Aidocr <br /> Can Do for You
              </Title>
              <SubTitle>
                Aidocr works like an intelligent assistant for all operational
                tasks across all data sources. Aidocr makes you smarter and
                significantly faster by enabling you to search all sources, tap
                into your entire knowledge, visualize both structured and
                unstructured data, and automate complete processes.
              </SubTitle>
            </div>
          </div>
        </div>        
      </div>
      <SolutionsList />
      <UserFocus />
      <UniqueReason />
      <RightChoice />
    </>
  );
};
