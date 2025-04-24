import { View, Text } from "react-native";
import { IconLogo } from "~/assets/icon/svg.assets";

const PopularCard = ({ data }: { data: any }) => {
  return (
    <View>
      {data?.map((item, index) => {
        return (
          <View className="bg-[#F0F3F5] py-4 px-4 pt-4 my-2" key={index}>
            <View className="flex-row gap-5">
              <IconLogo />

              <Text className="text-3xl font-bold w-[75%]">{item.title}</Text>
            </View>

            <Text className="text-base w-[80%] ml-5 pt-3">
              {item.description}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default PopularCard;
