import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import {
  AdminIconSvg,
  ChallengesIconSvg,
  HomeIconSvg,
  ManageFileIconSvg,
  ServicesIconSvg,
} from "~/assets/icon/svg.assets";

const BottomNavigator = () => {
  return (
    <View className="flex-row justify-between items-center bg-white p-2 pb-6">
      <Pressable
        onPress={() => {
          router.navigate("/private/home");
        }}
      >
        <View className="flex-col justify-center items-center px-4 gap-2">
          <HomeIconSvg />
          <Text className="text-[10px] font-[450]">Home</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          router.navigate("/private/services");
        }}
      >
        <View className="flex-col justify-center items-center px-4 gap-2">
          <ServicesIconSvg />
          <Text className="text-[10px] font-[450]">Services</Text>
        </View>
      </Pressable>
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
