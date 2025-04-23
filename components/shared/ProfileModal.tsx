import { Image, Modal, Pressable } from "react-native";
import { View } from "react-native";
import { CrossIconSvg, PerformanceIconSvg } from "~/assets/icon/svg.assets";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import { FC } from "react";

interface IPropsType {
  open: boolean;
  onClose: VoidFunction;
}

const ProfileModal: FC<IPropsType> = ({ open, onClose }) => {
  return (
    <Modal visible={open}>
      <View className="bg-white pt-24 px-4 flex-1 h-screen">
        <Pressable
          onPress={() => {
            onClose();
          }}
        >
          <View className="absolute -top-6 right-0 p-4">
            <CrossIconSvg />
          </View>
        </Pressable>
        <View className="pt-20 flex-col gap-4 justify-center place-items-start">
          <Image
            source={require("../../assets/images/dummyAvatar.png")}
            className="w-[88px] h-[88px] rounded-full"
          />
          <View className="flex-col place-items-start justify-center">
            <Text className="text-[32px] font-bold text-black">
              Farzana Shah
            </Text>
            <Text className="text-[20px] font-medium text-black mb-2">
              Service Agent
            </Text>
          </View>
          <View className="flex-row gap-2 flex-wrap items-center justify-start w-full">
            <View className="bg-black rounded-full px-[10px] py-[6px]">
              <Text className="text-xs text-white">Ranch Allocation</Text>
            </View>
            <View className="bg-black rounded-full px-[10px] py-[6px]">
              <Text className="text-xs text-white">
                Plot Subdivision & Merging
              </Text>
            </View>
            <View className="bg-black rounded-full px-[10px] py-[6px]">
              <Text className="text-xs text-white">Land Exchange</Text>
            </View>
            <View className="bg-black rounded-full px-[10px] py-[6px]">
              <Text className="text-xs text-white">Land Leasing</Text>
            </View>
          </View>
          <View className="flex-col">
            <Button
              variant={"outline"}
              className="w-full mt-6 py-2 bg-white border-black "
            >
              <View className="flex-row gap-2 items-center justify-center">
                <PerformanceIconSvg />
                <Text className="text-xl text-black">My Performance</Text>
              </View>
            </Button>
            <Button variant={"outline"} className="w-full mt-6 py-2 bg-white  ">
              <Text className="text-xl text-[#169F9F]">Check-in to OneHub</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;
