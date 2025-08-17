import { Title } from '../../../components/ui/Title';
import { RIGHT_CHOICES } from './constants';

export const RightChoice = () => {
  return (
    <div className="4xl:py-20 2xl:py-16 md:py-12.5 py-10">
      <div className="container flex flex-col gap-8">
        <div className="md:w-[60%] md:py-0 py-10">
          <Title>Why Aidocr Is the Right Choice</Title>
        </div>
        <div>
          <div className="flex justify-between gap-12.5 md:flex-row flex-col">
            <div className="md:flex-[0.5] md:w-full sm:w-[70%] sm:mx-auto w-[90%]">
              <img
                src="/assets/static/images/v4/escalator2.png"
                alt="workflow"
              />
            </div>
            <div className="workflow-content flex flex-col gap-8">
              {RIGHT_CHOICES.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h5 className="md:text-left text-center mb-2">{item.title}</h5>
                  <p className="xl:text-lg font-normal lg:text-base text-[15px] md:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
