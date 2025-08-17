import type {ChangeEventHandler, FC, FocusEventHandler, ReactNode} from 'react';
import clsx from 'clsx';
import type {
  InputExternalHandlers,
  InputInterface,
} from '../../common/types.ts';

interface Props extends InputInterface, InputExternalHandlers {
  showErrorText?: boolean;
  className?: string;
  readOnly?: boolean;
  clearable?: boolean;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
  onBlur?: FocusEventHandler;
  customComponent?: ReactNode;
}

export const TextArea: FC<Props> = ({
  name,
  className,
  register,
  onChange,
  onBlur,
  value,
  error,
  ...props
}) => {
  return (
    <div>
      <textarea
        {...props}
        name={name}
        {...(register && register(name))}
        {...(onChange && { onChange })}
        {...(onBlur && { onBlur })}
        value={value}
        className={clsx(
          'border-transparent focus:border-black rounded-0 border focus:outline py-4 px-6 !bg-white w-full transition-all duration-300 ease-in-out font-light text-black text-[15px] placeholder-black outline-none',
          error && 'focus:!border-red-500',
          value && !error && 'focus:!border-green-800',
          className,
        )}
      />
    </div>
  );
};
