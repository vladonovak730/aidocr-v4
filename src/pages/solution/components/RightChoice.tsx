import { Section } from '../../../components/section';
import { Title } from '../../../components/ui/Title';
import { RIGHT_CHOICES } from './constants';

export const RightChoice = () => {
  return (
    <Section>
      <div className="container flex py-16 flex-col gap-8">
        <div className="md:w-[60%]">
          <Title>Why Aidocr Is the Right Choice</Title>
        </div>
        <div>
          <div className="flex justify-between gap-12.5 md:flex-row flex-col">
            <div className="md:flex-[0.5] md:w-full sm:w-[70%] mx-auto w-[90%]">
              <img
                src="/assets/static/images/v4/escalator2.png"
                alt="workflow"
              />
            </div>
            <div className="workflow-content flex flex-col gap-8">
              {RIGHT_CHOICES.map((item) => (
                <div key={item.title} className="flex flex-col gap-6">
                  <h5 className="md:text-left text-center">{item.title}</h5>
                  <p className="xl:text-lg font-normal lg:text-base text-[15px] md:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
