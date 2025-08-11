import { type FormEventHandler, type PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
  dataTestId?: string;
}

export const FormWrapper = ({ onSubmit, className, children }: Props) => {
  return (
    <form action="" className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
