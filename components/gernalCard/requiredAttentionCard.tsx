import { View, Text } from "react-native";
import { ColorCircleIcon } from "~/assets/icon/svg.assets";

const RequiredAttentionCard = ({ data }: { data: any }) => {
  return (
    <View>
      {data?.map((item, index) => {
        return (
          <View
            className="border bg-white border-[#F0F3F5] rounded-md py-5 mt-2  px-4"
            key={index}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-bold w-[35%]">{item.title}</Text>
              <View className="gap-1  items-end w-[50%] ">
                <Text className="text-base font-bold  color-black">
                  {item.description}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center pt-2 justify-between">
              <View className="gap-1">
                <Text className="text-base  color-black">Abu Dhabi City</Text>
                <ColorCircleIcon />
              </View>
              <View>
                <Text className="text-base color-black font-bold">
                  {item.days} Days Remaining
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default RequiredAttentionCard;
