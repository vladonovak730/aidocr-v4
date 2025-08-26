import clsx from 'clsx';
import { type PropsWithChildren, type FC } from 'react';

interface IResponsiveCardProps extends PropsWithChildren {
  className?: string;
  title?: string;
  description: string | string[];
}

export const ResponsiveCard: FC<IResponsiveCardProps> = ({ title, description, className }) => {
  return (
    <div
      className={clsx(
        'flex items-start justify-center p-6 bg-primary',
        className,
      )}
    >
      <div>
        <div className="font-bold xl:text-xl lg:text-lg text-base mb-0.5">
          {title}
        </div>
        <div className="xl:text-lg font-normal lg:text-base text-[15px]">
          {typeof description === 'string' ? (
            <div className="xl:text-lg font-normal lg:text-base text-[15px]">
            {description}
            </div>
          ) : (
            <ul className="list-disc pl-6">
              {description.map((ben, ind) => (
                <li key={ind}>{ben}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
