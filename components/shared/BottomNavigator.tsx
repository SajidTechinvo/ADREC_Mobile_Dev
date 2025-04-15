import { Text, View } from "react-native";
import {
  AdminIconSvg,
  ChallengesIconSvg,
  HomeIconSvg,
  ManageFileIconSvg,
  ServicesIconSvg,
} from "~/assets/icon/svg.assets";

const BottomNavigator = () => {
  return (
    <View className="flex-row justify-between items-center bg-white p-2">
      <View className="flex-col justify-center items-center px-4 gap-2">
        <HomeIconSvg />
        <Text className="text-[10px] font-[450]">Home</Text>
      </View>
      <View className="flex-col justify-center items-center px-4 gap-2">
        <ServicesIconSvg />
        <Text className="text-[10px] font-[450]">Services</Text>
      </View>
      <View className="flex-col justify-center items-center px-4 gap-2">
        <ManageFileIconSvg />
        <Text className="text-[10px] font-[450]">Manage</Text>
      </View>
      <View className="flex-col justify-center items-center px-4 gap-2">
        <ChallengesIconSvg />
        <Text className="text-[10px] font-[450]">Challenges</Text>
      </View>
      <View className="flex-col justify-center items-center px-4  gap-2">
        <AdminIconSvg />
        <Text className="text-[10px] font-[450]">Challenges</Text>
      </View>
    </View>
  );
};

export default BottomNavigator;
