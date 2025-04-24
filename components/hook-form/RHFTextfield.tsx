import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputField, TextfieldPropTypes } from "../ui/inputField";

interface PropTypes
  extends Omit<TextfieldPropTypes, "errorMessage" | "hasError"> {
  name: string;
  defaultValue?: any;
}

const RHFTextfield: FC<PropTypes> = ({ name, defaultValue, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ""}
      render={({ field, fieldState: { error } }) => (
        <InputField
          {...props}
          {...field}
          onChangeText={(txt) => field.onChange(txt)}
          hasError={!!error}
          errorMessage={error?.message}
        />
      )}
    />
  );
};

export default RHFTextfield;
