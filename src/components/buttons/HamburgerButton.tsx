import { type FC } from 'react';
import clsx from 'clsx';

interface IHamburgerButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const HamburgerButton: FC<IHamburgerButtonProps> = ({
  onClick,
  isActive,
}) => {
  return (
    <button
      className={clsx(
        'flex xl:hidden flex-col absolute top-1/2 right-0 w-[28px] h-[28px] bg-transparent border-0 p-0 cursor-pointer transition-transform duration-250 ease-in-out',
        isActive && 'is-active',
      )}
      aria-label="Menu"
      onClick={onClick}
    >
      <span
        className={`block w-[28px] h-[3px] rounded bg-black origin-center transition-transform duration-250 ease-in-out ${
          isActive ? 'transform translate-y-0 rotate-45' : 'translate-y-[-6px]'
        }`}
      ></span>
      <span
        className={clsx(
          'block w-[28px] h-[3px] rounded bg-black origin-center transition-transform duration-250 ease-in-out',
          isActive && 'hidden',
        )}
      ></span>
      <span
        className={clsx(
          'block w-[28px] h-[3px] rounded bg-black origin-center transition-transform duration-250 ease-in-out',
          isActive
            ? 'transform -translate-y-[3px] -rotate-45'
            : 'translate-y-[6px]',
        )}
      ></span>
    </button>
  );
};
