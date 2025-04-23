import { FC } from "react";
import { View, Text } from "react-native";
import { BadgeIcon } from "~/assets/icon/svg.assets";

interface IPropsType {
  TitleProps?: string;
  desProps?: string;
  classes?: string;
}

const ChallengesCard: FC<IPropsType> = ({
  TitleProps = "",
  desProps = "",
  classes = "",
}) => {
  return (
    <View
      className={`border w-[270px] rounded-md border-white py-2  bg-white ${classes}`}
    >
      <View className="flex-col gap-2 ">
        <View className="flex-row items-center justify-between py-1 px-3">
          <Text className="text-2xl font-bold">{TitleProps}</Text>
          <Text className=" text-base w-[100px]  color-black ">{desProps}</Text>
        </View>
        <View className="flex-row items-center justify-between  gap-3 py-3 px-3 border border-gray-100 mx-3">
          <BadgeIcon />
          <Text className="text-base w-[160px]">
            You are on track to get this months badge!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChallengesCard;
