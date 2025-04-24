import { View, Text } from "react-native";
import { StarIcon } from "~/assets/icon/svg.assets";

const FavoriteCard = ({ data }: { data: any }) => {
  return (
    <View>
      {data?.map((item, index) => {
        return (
          <View>
            <View className="bg-[#F0F3F5] py-4 px-4 pt-4 my-2" key={index}>
              <View className="flex-row items-center gap-2 justify-between pb-4">
                <Text className="text-2xl font-bold w-[75%] ">
                  {item.title}
                </Text>
                <View className="absolute top-0 right-0">
                  <StarIcon />
                </View>
              </View>
              <Text>{item.description}</Text>
              <View className="flex-row items-center gap-2 pt-3">
                {item.tags?.map((tag, index) => {
                  return (
                    <View
                      className="bg-[#D0EBFF] px-3 py-2 rounded-full flex-wrap"
                      key={index}
                    >
                      <Text className="text-[#345D96] text-sm">{tag}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FavoriteCard;
