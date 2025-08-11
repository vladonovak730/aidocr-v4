import type { InputExternalHandlers, InputInterface } from "../../common/types.ts";
import type { FC } from "react";
import clsx from "clsx";

interface Props extends InputInterface, InputExternalHandlers {
  showErrorText?: boolean;
  className?: string;
  readOnly?: boolean;
  clearable?: boolean;
  onChange?: (event: any) => void;
  onClear?: () => void;
  onBlur?: (event: any) => void;
  customComponent?: any;
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
        className={clsx("border-transparent focus:border-black rounded-0 border-[1px] focus:outline-[1px] py-2 px-[25px] bg-white w-full transition-all duration-300 ease-in-out font-light text-black text-[15px] placeholder-black outline-none", error && "focus:!border-red-500", value && !error && "focus:!border-green-800", className)}
      />
    </div>
  );
}