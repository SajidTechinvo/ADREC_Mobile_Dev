import React from "react";
import { Pressable, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { cn } from "~/lib/utils";

type CheckboxProps = {
  checked: boolean;
  onToggle: () => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onToggle,
  label,
  description,
  disabled = false,
  className,
}) => {
  return (
    <Pressable
      onPress={onToggle}
      disabled={disabled}
      className={cn("flex-row items-center space-x-3 gap-2 py-2", className)}
    >
      <View
        className={cn(
          "w-5 h-5 rounded-sm border border-[#d9d9d9] items-center justify-center",
          checked ? "bg-[#169f9f] border-[#169f9f]" : "bg-white",
          disabled && "opacity-50"
        )}
      >
        {checked && <Feather name="check" size={14} color="white" />}
      </View>
      <View className="flex-1">
        {label && <Text className="text-base font-[450]">{label}</Text>}
        {description && (
          <Text className="text-xs text-muted-foreground">{description}</Text>
        )}
      </View>
    </Pressable>
  );
};
