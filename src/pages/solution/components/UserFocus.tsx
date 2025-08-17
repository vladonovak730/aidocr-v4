import { Card } from '../../../components/ui/Card';
import { SubTitle } from '../../../components/ui/SubTitle';
import { Title } from '../../../components/ui/Title';
import { USER_TARGETS } from './constants';
import { Section } from '../../../components/section';

export const UserFocus = () => {
  return (
    <Section className="bg-blue">
      <div className="container">
        <div className="md:w-[60%] pt-16 flex flex-col gap-8">
          <Title>
            For whom Aidocr <br /> is made for
          </Title>
          <SubTitle>
            Whether you’re a planner, general contractor, or facility manager,
            Aidocr adapts to your role and the relevant task-related data.
            Aidocr is designed to be flexible and useful for its users from day
            one, eliminating the need for complex tool training.
          </SubTitle>
        </div>
        <div className="flex flex-col gap-8">
          {USER_TARGETS.map((item) => (
            <div key={item.title}>
              <h5 className="md:text-left text-center mb-2">{item.title}</h5>
              <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-7.5 gap-y-7.5 my-7.5">
                <Card>
                  <div>
                    <div className="font-bold xl:text-xl lg:text-lg text-base mb-0.5">
                      Problem
                    </div>
                    <div className="xl:text-lg font-normal lg:text-base text-[15px]">
                      {item.problem}
                    </div>
                  </div>
                </Card>
                <Card>
                  <div>
                    <div className="font-bold xl:text-xl lg:text-lg text-base mb-0.5">
                      Solution
                    </div>
                    <div className="xl:text-lg font-normal lg:text-base text-[15px]">
                      {item.solution}
                    </div>
                  </div>
                </Card>
                <Card>
                  <div>
                    <div className="font-bold xl:text-xl lg:text-lg text-base mb-0.5">
                      Benefit
                    </div>
                    <div className="xl:text-lg font-normal lg:text-base text-[15px] pl-6">
                      <ul className="list-disc">
                        {item.benefit.map((ben, ind) => (
                          <li key={ind}>{ben}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
