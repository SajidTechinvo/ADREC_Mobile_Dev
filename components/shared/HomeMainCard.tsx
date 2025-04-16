import { Image, View } from "react-native";
import { Text } from "../ui/text";
import { ArrowDownIconSvg } from "~/assets/icon/svg.assets";
import { Button } from "../ui/button";
import { CircularProgress } from "../ui/CircularProgress";

const HomeMainCard = () => {
  return (
    <View className="bg-white px-[18px] py-6 flex-col items-center justify-center gap-6 rounded-lg">
      <View className="flex-row gap-4 items-center justify-center">
        <Image
          source={require("../../assets/images/dummyAvatar.png")}
          className="w-[100px] h-[100px] rounded-full"
        />

        <CircularProgress
          percentage={70}
          pointsEarned={140}
          totalPoints={200}
        />
      </View>
      <View className="flex-col gap-[2px] items-center justify-center">
        <Text className="text-[32px] font-bold text-black">Farzana Shah</Text>
        <Text className="text-[20px] font-medium text-black mb-2">
          Service Agent
        </Text>
        <View className=" w-[82px] h-[24px] border border-[#169f9f] rounded-full flex-row gap-2 items-center justify-center">
          <Text className="text-[#169f9f]">More</Text>
          <ArrowDownIconSvg />
        </View>
      </View>
      <Button variant={"default"} className="w-full mt-6 py-2">
        <Text className="text-xl">Check-in to OneHub</Text>
      </Button>
    </View>
  );
};

export default HomeMainCard;
