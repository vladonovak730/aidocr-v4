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
    <div className="p-[14px] bg-white flex flex-col items-center w-full justify-center">
      <img className="w-4" src={image} alt="Addres" />
      <p className="font-bold 5xl:text-[19px] 5xl:my-[20px] text-[17px] my-2">
        {title}
      </p>
      <ul className="flex flex-col items-center gap-[10px]">
        {contactInfos.map((item) => (
          <li
            key={item.value}
            className={clsx(
              '5xl:text-[17px] text-[15px]',
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
