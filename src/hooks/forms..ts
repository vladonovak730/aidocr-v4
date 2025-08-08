import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useReactHookForm } from "react-hook-form";
import { Schema } from "yup";

export interface Props<T> {
  schema: Schema<T>;
  defaultValues?: any;
}

export const useForm = <T extends Record<string, any> = Record<string, any>>({ schema, defaultValues }: Props<T>) => {
  const methods = useReactHookForm<T>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues
  });

  return methods;
};