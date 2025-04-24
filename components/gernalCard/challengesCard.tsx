import { View, Text, Image } from "react-native";
import { RectProps } from "react-native-svg";

export interface ContainerProps {
  ContainerProps: RectProps;
}

const ChallengesCard = ({
  data: Challenge,
  ContainerProps,
}: {
  data: any;
  ContainerProps: any;
}) => {
  return (
    <View className="flex-row" {...ContainerProps}>
      {Challenge?.map((challenge, index) => {
        return (
          <View
            className="border rounded-md border-white py-2 mx-2 bg-white my-1"
            key={index}
          >
            <View className="pt-2">
              <View className="flex-row items-center justify-between pb-5 pt-2 px-3">
                <Text className="text-2xl font-bold">
                  {challenge?.value} Days
                </Text>
                <Text className=" text-base w-[130px] color-black">
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
          </View>
        );
      })}
    </View>
  );
};

export default ChallengesCard;
