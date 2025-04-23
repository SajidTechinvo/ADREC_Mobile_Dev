import { FC } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import {
  AdminIconSvg,
  ChallengesIconSvg,
  CommunityIconSvg,
  CrossIconSvg,
  HomeIconSvg,
  ManageFileIconSvg,
  ServicesIconSvg,
  WorkflowIconSvg,
} from "~/assets/icon/svg.assets";

interface IPropsType {
  open: boolean;
  onClose: VoidFunction;
}

const SidebarModal: FC<IPropsType> = ({ open, onClose }) => {
  return (
    <Modal visible={open}>
      <View className="bg-[#e8f5f5] pt-24 px-4 h-screen">
        <Pressable
          onPress={() => {
            onClose();
          }}
        >
          <View className="absolute -top-6 right-0 p-4">
            <CrossIconSvg />
          </View>
        </Pressable>
        <View className="flex-col px-3 py-4">
          <View className="flex-row items-center gap-2 p-3">
            <HomeIconSvg color="#717176" />
            <Text className="text-sm mt-1 font-medium text-[#717176]">
              Home
            </Text>
          </View>
          <View className="flex-row items-center gap-2 p-3">
            <CommunityIconSvg />
            <Text className="text-sm mt-1 font-medium text-[#717176]">
              Community
            </Text>
          </View>
          <View className="flex-row items-center gap-2 p-3">
            <ServicesIconSvg />
            <Text className="text-sm mt-1 font-medium text-[#717176]">
              Services
            </Text>
          </View>
          <View className="flex-row items-center gap-2 p-3">
            <ChallengesIconSvg />
            <Text className="text-sm mt-1 font-medium text-[#717176]">
              Challenges
            </Text>
          </View>
          <View className="flex-row items-center gap-2 p-3">
            <WorkflowIconSvg />
            <Text className="text-sm mt-1 font-medium text-[#717176]">
              Workflow
            </Text>
          </View>
          <View className="flex-row items-center gap-2 p-3">
            <ManageFileIconSvg />
            <Text className="text-sm mt-1 font-medium text-[#717176]">
              Management
            </Text>
          </View>
          <View className="flex-row items-center gap-2 p-3">
            <AdminIconSvg />
            <Text className="text-sm mt-1 font-medium text-[#717176]">
              Admin
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SidebarModal;
