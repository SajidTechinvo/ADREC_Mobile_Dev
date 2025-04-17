import { cva, VariantProps } from "class-variance-authority";
import React, { useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { EyeCloseIconSvg, EyeOpenIconSvg } from "~/assets/icon/svg.assets";
import { cn } from "~/lib/utils";

const inputVariants = cva(
  "flex-row justify-between items-center border border-[#dadadb] rounded-md  bg-input-bg-color  w-full",
  {
    variants: {
      size: {
        sm: "h-[30px]",
        default: "h-[50px] bg-[#f0f3f5]",
        lg: "h-[70px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

type InputProps = TextInputProps &
  VariantProps<typeof inputVariants> & {
    label?: string;
    required?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    isPassword?: boolean;
    containerClassName?: string;
    inputClassName?: string;
  };

const InputField = ({
  label,
  required,
  startIcon,
  endIcon,
  isPassword,
  className,
  containerClassName,
  inputClassName,
  size,
  ...props
}: InputProps) => {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View className={cn("w-full space-y-1 gap-3", containerClassName)}>
      {label && (
        <Text className="text-xs text-text-dark-color font-bold">
          {label} {required && <Text className="text-red-500 ">*</Text>}
        </Text>
      )}
      <View className={cn(inputVariants({ size }), className)}>
        <View className="flex-row items-center w-full px-3">
          {startIcon && <View className="mr-2">{startIcon}</View>}
          <TextInput
            className={` text-base text-[placeholder-color]  w-full ${inputClassName}`}
            secureTextEntry={secure}
            placeholderTextColor="#9CA3AF"
            {...props}
          />
        </View>
        {isPassword ? (
          <Pressable
            onPress={() => setSecure(!secure)}
            className="absolute right-3"
          >
            {secure ? <EyeCloseIconSvg /> : <EyeOpenIconSvg />}
          </Pressable>
        ) : (
          endIcon && <View className="ml-2">{endIcon}</View>
        )}
      </View>
    </View>
  );
};

export { InputField };
