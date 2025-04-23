import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ArrowRightIconSvg } from "~/assets/icon/svg.assets";

type ActivityCardProps = {
  status: string;
  tag: string;
  id: string;
  customer: string;
  onPressResolve?: () => void;
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  status,
  tag,
  id,
  customer,
  onPressResolve,
}) => {
  return (
    <View className="bg-[#34343b] px-4 py-3 mt-4 rounded-lg border-b-[3px] border-b-[#EE3E43] flex-col gap-2">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-white text-[16px] font-bold">{status}</Text>
        <View className="bg-black rounded-full px-[10px] py-[6px]">
          <Text className="text-white text-[12px] font-bold">{tag}</Text>
        </View>
      </View>

      <View className="flex-row w-full justify-between items-center">
        <View className="flex-row items-center gap-1">
          <Text className="text-white text-[14px] font-bold">ID:</Text>
          <Text className="text-white text-[14px]">{id}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Text className="text-white text-[14px] font-bold">Customer:</Text>
          <Text className="text-white text-[14px] text-wrap">{customer}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onPressResolve}
        className="flex-row items-center gap-1 pt-2"
        disabled={!onPressResolve}
      >
        <Text className="text-white text-[14px] font-bold">Resolve</Text>
        <ArrowRightIconSvg color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ActivityCard;
