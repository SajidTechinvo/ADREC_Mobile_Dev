import { Image, Pressable, View } from "react-native";
import {
  BellIconSvg,
  PlusIconSvg,
  SettingIconSvg,
  VerifiedTickIconSvg,
} from "~/assets/icon/svg.assets";
import { Text } from "../ui/text";
import SidebarModal from "./SidebarModal";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

const CommonHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 py-2 bg-none ">
        <Pressable
          onPress={() => {
            setOpenProfile(true);
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/dummyAvatar.png")}
              className="w-9 h-9 rounded-full"
            />
            <View className="absolute bottom-0 right-0  rounded-full h-4 w-4 flex items-center justify-center">
              <VerifiedTickIconSvg />
            </View>
          </View>
        </Pressable>
        <View className="flex-row gap-4 items-center mt-2">
          <Pressable
            onPress={() => {
              setOpenMenu(true);
            }}
          >
            <SettingIconSvg />
          </Pressable>
          <View>
            <BellIconSvg />
            <View className="bg-red-500  rounded-full h-4 w-4 text-white text-sm absolute -top-1 right-0 flex items-center justify-center">
              <Text className="text-white text-[8.5px] font-bold">8</Text>
            </View>
          </View>
          <PlusIconSvg />
        </View>
      </View>
      <SidebarModal
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
      />
      <ProfileModal
        open={openProfile}
        onClose={() => {
          setOpenProfile(false);
        }}
      />
    </View>
  );
};

export default CommonHeader;
