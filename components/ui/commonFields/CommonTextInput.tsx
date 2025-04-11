import {
  EyeCloseIconSvg,
  EyeOpenIconSvg,
  LockPasswordIconSvg,
} from "@/assets/icon/svg.assets";
import React, { ReactNode, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";

interface CommonInputProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  className?: string;
  inputClassName?: string;
  secureTextEntry?: boolean;
  hasEndIcon?: boolean;
  hasStartIcon?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
}

const CommonTextInput: React.FC<CommonInputProps> = ({
  label,
  required = false,
  placeholder = "",
  value,
  onChangeText,
  className = "",
  inputClassName = "",
  hasEndIcon = false,
  hasStartIcon = false,
  secureTextEntry = false,
  endIcon,
  startIcon,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = secureTextEntry;

  return (
    <View className={`mb-4 gap-[10px] relative ${className}`}>
      {label && (
        <Text className="font-semibold text-black mb-1">
          {label}
          {required && <Text className="text-red-500"> *</Text>}
        </Text>
      )}
      <View className="relative w-full justify-center">
        <TextInput
          {...props}
          className={`bg-[#F0F3F5] pl-10 pr-10 py-3 border border-[#E7E7E8] text-gray-900 rounded-[5px] ${inputClassName}`}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
        />

        {(hasStartIcon || isPassword) && (
          <View className="absolute left-3 top-3.5">
            {startIcon ? startIcon : <LockPasswordIconSvg />}
          </View>
        )}

        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {isPasswordVisible ? <EyeCloseIconSvg /> : <EyeOpenIconSvg />}
          </TouchableOpacity>
        )}

        {!isPassword && hasEndIcon && endIcon && (
          <View className="absolute right-3 top-1/2 -translate-y-1/2">
            {endIcon}
          </View>
        )}
      </View>
    </View>
  );
};

export default CommonTextInput;
