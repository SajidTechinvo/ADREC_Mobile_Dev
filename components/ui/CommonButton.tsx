import React, { FC } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

export interface ButtonPropTypes {
  variant?:
    | "primary"
    | "secondary"
    | "light"
    | "dark"
    | "danger"
    | "success"
    | "info"
    | "linkedin"
    | "warning"
    | "outlinedDanger"
    | "outlined"
    | "outline";
  size?: "large" | "medium" | "small" | "xSmall";
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  labelProps?: object;
  icon?: () => JSX.Element;
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

const CommonButton: FC<ButtonPropTypes> = ({
  children,
  variant = "primary",
  size = "large",
  fullWidth = false,
  isLoading = false,
  isDisabled = false,
  labelProps = {},
  icon,
  onPress,
}) => {
  // Variant styles
  const variantClass =
    variant === "primary"
      ? "bg-blue-500 text-white"
      : variant === "secondary"
      ? "bg-gray-700 text-white"
      : variant === "light"
      ? "bg-white text-gray-800"
      : variant === "dark"
      ? "bg-black text-white"
      : variant === "danger"
      ? "bg-red-500 text-white"
      : variant === "success"
      ? "bg-green-500 text-white"
      : variant === "info"
      ? "bg-cyan-500 text-white"
      : variant === "linkedin"
      ? "bg-[#2977C9] text-white"
      : variant === "warning"
      ? "bg-yellow-400 text-white"
      : variant === "outlinedDanger"
      ? "border border-red-500 bg-transparent text-red-500"
      : variant === "outlined"
      ? "border border-neutral-800 bg-transparent text-neutral-800"
      : variant === "outline"
      ? "border border-white bg-transparent text-white"
      : "";

  // Size styles
  const sizeClass =
    size === "large"
      ? "h-13 rounded-full px-6 text-base"
      : size === "medium"
      ? "h-12 rounded-full px-5 text-sm"
      : size === "small"
      ? "h-8 rounded-full px-4 text-xs"
      : size === "xSmall"
      ? "h-8 px-3 py-2 rounded-md text-[10px]"
      : "";

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = isDisabled ? "opacity-50" : "";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading || isDisabled}
      className={`flex-row items-center justify-center gap-2 ${variantClass} ${sizeClass} ${widthClass} ${disabledClass}`}
    >
      {isLoading && <ActivityIndicator size="small" color="white" />}
      {icon && icon()}
      <Text className="text-center" {...labelProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
