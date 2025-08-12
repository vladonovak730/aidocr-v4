import { SubTitle } from '../../../components/ui/SubTitle';
import { Title } from '../../../components/ui/Title';
import { UNIQUE_REASONS } from './constants';

export const UniqueReason = () => {
  return (
    <div className="4xl:py-[80px] 2xl:py-[65px] md:py-[50px] py-[40px]">
      <div className="container">
        <div className="md:w-[60%] md:py-0 py-[40px]">
          <Title>What makes us unique</Title>
          <br />
          <SubTitle>
            Aidocr offers a very unique set of features that go beyond just
            document search - tailored to enterprise requirements ,
            battle-tested, and grown by the demands of our clients.
          </SubTitle>
        </div>
        <div>
          <div className="flex justify-between gap-[50px] md:flex-row flex-col">
            <div className="workflow-content flex flex-col gap-[33.6px]">
              {UNIQUE_REASONS.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h5 className="md:text-left text-center">{item.title}</h5>
                  <p className="xl:text-[18px] font-normal lg:text-[16px] text-[15px] md:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:flex-[0.5] md:w-full sm:w-[70%] sm:mx-auto w-[90%]">
              <img src="/assets/static/images/v4/thinking.png" alt="workflow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
