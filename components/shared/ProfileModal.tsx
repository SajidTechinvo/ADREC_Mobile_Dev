import { Image, Modal, Pressable } from "react-native";
import { View } from "react-native";
import { CrossIconSvg, PerformanceIconSvg } from "~/assets/icon/svg.assets";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface IPropsType {
  open: boolean;
  onClose: VoidFunction;
}
export interface IResultResponse {
  result: IResult;
  success: boolean;
  error: any;
}
export interface IResult {
  name: string;
  desigantion: string;
  tags: string[];
  image: string;
  on_time: OnTime;
  delays: Delays;
  one_time: OneTime;
}

export interface OnTime {
  percentage: number;
  count: number;
  total: number;
}

export interface Delays {
  percentage: number;
  count: number;
  total: number;
}

export interface OneTime {
  percentage: number;
  count: number;
  total: number;
}

const ProfileModal: FC<IPropsType> = ({ open, onClose }) => {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => axios.get("/mims-profile/profile"),
    select: (res: AxiosResponse<IResultResponse>): IResult => {
      return res.data.result;
    },
  });

  return (
    <Modal visible={open}>
      <View className="bg-white mx-4 mt-10  flex-1 h-screen">
        <Pressable
          onPress={() => {
            onClose();
          }}
        >
          <View className="absolute  top-0 right-0 p-4">
            <CrossIconSvg />
          </View>
        </Pressable>
        <View className="pt-28  flex-col gap-4 justify-center place-items-start">
          <Image
            source={{ uri: profile?.image || "fallback-image-uri" }}
            className="w-[88px] h-[88px] rounded-full"
          />
          <View className="flex-col place-items-start justify-center">
            <Text className="text-[32px] font-bold text-black">
              {profile?.name}
            </Text>
            <Text className="text-[20px] font-medium text-black mb-2">
              {profile?.desigantion}
            </Text>
          </View>

          <View className="flex-row gap-2 flex-wrap items-center">
            {profile?.tags.map((tag, index) => (
              <View>
                <View key={index}>
                  <View className="bg-black rounded-full px-[10px] py-[6px]">
                    <Text className="text-xs text-white">{tag}</Text>
                  </View>
                </View>
              </View>
            ))}
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
