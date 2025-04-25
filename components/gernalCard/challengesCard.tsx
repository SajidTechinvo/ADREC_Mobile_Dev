import { View, Text, Image } from "react-native";
import { RectProps } from "react-native-svg";
import CustomSkeleton from "../shared/CustomSkeleton";
import { LinearGradient } from "expo-linear-gradient";

export interface ContainerProps {
  ContainerProps: RectProps;
}

const ChallengesCard = ({
  data: Challenge,
  ContainerProps,
  isLoading = false,
}: {
  data: any;
  ContainerProps: any;
  isLoading?: boolean;
}) => {
  return (
    <View className="flex-row" {...ContainerProps}>
      {isLoading ? (
        <>
          {[0, 1, 2, 3, 4].map((index) => (
            <CustomSkeleton
              height={100}
              width={200}
              marginEnd={16}
              key={index}
            />
          ))}
        </>
      ) : (
        <>
          {Challenge?.map((challenge, index) => {
            return (
              <View
                className="border rounded-md border-white mx-2 my-1"
                key={index}
              >
                <LinearGradient
                  colors={["#B9E2E2", "#fff"]}
                  start={{ x: 1, y: 0.75 }}
                  end={{ x: 0.3, y: 0.25 }}
                  style={{ flex: 1, borderRadius: 10 }}
                >
                  <View className="pt-2 py-2">
                    <View className="flex-row items-center justify-between pb-5 pt-2 px-3">
                      <Text className="text-2xl font-bold">
                        {challenge?.value} Days
                      </Text>
                      <Text
                        className=" text-base w-[130px] color-black"
                        numberOfLines={3}
                      >
                        {challenge.title}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-5 mb-3 px-3 py-1 border rounded-md border-gray-100 mx-3">
                      <Image
                        source={{ uri: challenge.badge }}
                        className="w-[50px] h-[50px]"
                      />
                      <Text className="text-base w-[210px]">
                        {challenge.description}
                      </Text>
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

export default ChallengesCard;
