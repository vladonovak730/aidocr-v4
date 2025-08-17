import type { FC } from 'react';
import clsx from 'clsx';

interface IContactCardProps {
  image: string;
  title: string;
  contactInfos: { value: string; linkable?: boolean; option?: string }[];
}

export const ContactCard: FC<IContactCardProps> = ({
  image,
  title,
  contactInfos,
}) => {
  return (
    <div className="p-3.5 bg-white flex flex-col items-center w-full justify-center">
      <img className="w-7.5" src={image} alt="Addres" />
      <p className="font-bold 2xl:text-[19px] 2xl:my-5 text-[17px] my-4">
        {title}
      </p>
      <ul className="flex flex-col items-center gap-2.5">
        {contactInfos.map((item) => (
          <li
            key={item.value}
            className={clsx(
              '2xl:text-[17px] text-[15px]',
              item.linkable && 'hover:underline cursor-pointer',
            )}
          >
            {item.linkable ? (
              <a
                property="email"
                target="_blank"
                href={`${item.option}:${item.value}`}
              >
                info@aidocr.com
              </a>
            ) : (
              item.value
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
