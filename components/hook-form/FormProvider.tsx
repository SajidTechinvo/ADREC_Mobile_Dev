import { FC, ReactNode } from "react";
import { FormProvider as RHFProvider, UseFormReturn } from "react-hook-form";

interface Props {
  children: ReactNode;
  methods: UseFormReturn<any>;
}

const FormProvider: FC<Props> = ({ children, methods }) => {
  return <RHFProvider {...methods}>{children}</RHFProvider>;
};

export default FormProvider;
