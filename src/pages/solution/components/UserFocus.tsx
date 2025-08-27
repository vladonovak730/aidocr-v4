import { SubTitle } from '../../../components/ui/SubTitle';
import { Title } from '../../../components/ui/Title';
import { USER_TARGETS } from './constants';
import { Section } from '../../../components/section';
import { ResponsiveCard } from '../../../components/ui/ResponsiveCard';

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
        <div className="flex flex-col gap-8 mt-7.5">
          {USER_TARGETS.map((item) => (
            <div key={item.title}>
              <h5 className="md:text-left text-center mb-2">{item.title}</h5>
              <div className="grid xl:grid-cols-3 gap-x-9 gap-y-7.5 my-7.5">
                <ResponsiveCard title="Problem" description={item.problem} />
                <ResponsiveCard title="Solution" description={item.solution} />
                <ResponsiveCard title="Benefit" description={item.benefit} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
