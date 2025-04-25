import { View, Text } from "react-native";
import { IconLogo } from "~/assets/icon/svg.assets";
import CustomSkeleton from "../shared/CustomSkeleton";

const PopularCard = ({
  data,
  isLoading,
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
              <View className="bg-[#F0F3F5] py-4 px-4 pt-4 my-2" key={index}>
                <View className="flex-row gap-5">
                  <IconLogo />

                  <Text className="text-3xl font-bold w-[75%]">
                    {item.title}
                  </Text>
                </View>

                <Text className="text-base w-[80%] ml-5 pt-3">
                  {item.description}
                </Text>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};

export default PopularCard;
