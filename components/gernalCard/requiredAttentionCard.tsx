import { View, Text } from "react-native";
import { ColorCircleIcon } from "~/assets/icon/svg.assets";
import CustomSkeleton from "../shared/CustomSkeleton";
import { LinearGradient } from "expo-linear-gradient";

const RequiredAttentionCard = ({
  data,
  isLoading = false,
}: {
  data: any;
  isLoading?: boolean;
}) => {
  return (
    <View>
      {isLoading ? (
        <>
          {[0, 1, 2, 3, 4].map((index) => (
            <CustomSkeleton height={100} key={index} />
          ))}
        </>
      ) : (
        <>
          {data?.map((item, index) => {
            return (
              <View
                className="border bg-white border-[#F0F3F5] border-md"
                key={index}
              >
                <LinearGradient
                  colors={[index === 0 ? "#FCD8D980" : "#fff", "#fff"]}
                  start={{ x: 1, y: 0.75 }}
                  end={{ x: 0.3, y: 0.25 }}
                  style={{ flex: 1, borderRadius: 10 }}
                >
                  <View className="rounded-md py-5 mt-2  px-4">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-base font-bold w-[35%]">
                        {item.title}
                      </Text>
                      <View className="gap-1  items-end w-[50%] ">
                        <Text className="text-base font-bold  color-black">
                          {item.description}
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-center pt-2 justify-between">
                      <View className="gap-1">
                        <Text className="text-base  color-black">
                          Abu Dhabi City
                        </Text>
                        <ColorCircleIcon />
                      </View>
                      <View>
                        <Text className="text-base color-black font-bold">
                          {item.days} Days Remaining
                        </Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};

export default RequiredAttentionCard;
