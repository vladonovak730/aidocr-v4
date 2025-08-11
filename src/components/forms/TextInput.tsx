import type { FC } from 'react';
import clsx from 'clsx';
import type {
  InputExternalHandlers,
  InputInterface,
} from '../../common/types.ts';

interface Props extends InputInterface, InputExternalHandlers {
  type?: string;
  showErrorText?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  onChange?: (event: any) => void;
  onClear?: () => void;
  onBlur?: (event: any) => void;
  customComponent?: any;
}

export const TextInput: FC<Props> = ({
  name,
  type = 'text',
  register,
  onChange,
  onBlur,
  value,
  error,
  ...props
}) => {
  return (
    <div>
      <input
        {...props}
        name={name}
        type={type}
        {...(register && register(name))}
        {...(onChange && { onChange })}
        {...(onBlur && { onBlur })}
        value={value}
        className={clsx(
          'border-transparent focus:border-black rounded-0 border-[1px] focus:outline-[1px] py-2 px-[25px] bg-white w-full transition-all duration-300 ease-in-out font-light text-black text-[15px] placeholder-black outline-none',
          error && 'focus:!border-red-500',
          value && !error && 'focus:!border-green-800',
        )}
      />
    </div>
  );
};
