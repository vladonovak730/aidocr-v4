import { SubTitle } from '../../../components/ui/SubTitle';
import { Title } from '../../../components/ui/Title';
import { UNIQUE_REASONS } from './constants';

export const UniqueReason = () => {
  return (
    <div className="4xl:py-20 2xl:py-16 md:py-12.5 py-10">
      <div className="container">
        <div className="md:w-[60%] md:py-0 py-10 flex flex-col gap-8">
          <Title>What makes us unique</Title>
          <SubTitle>
            Aidocr offers a very unique set of features that go beyond just
            document search - tailored to enterprise requirements ,
            battle-tested, and grown by the demands of our clients.
          </SubTitle>
        </div>
        <div className="mt-7.5">
          <div className="flex justify-between gap-12.5 md:flex-row flex-col">
            <div className="workflow-content flex flex-col gap-8">
              {UNIQUE_REASONS.map((item) => (
                <div key={item.title} className="flex flex-col gap-6">
                  <h5 className="md:text-left text-center">{item.title}</h5>
                  <p className="xl:text-lg font-normal lg:text-base text-[15px] md:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:flex-[0.5] md:w-full sm:w-[70%] mx-auto w-[90%]">
              <img src="/assets/static/images/v4/thinking.png" alt="workflow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
