import { Image, View } from "react-native";
import { Text } from "../ui/text";
import { ArrowDownIconSvg } from "~/assets/icon/svg.assets";
import { Button } from "../ui/button";
import { CircularProgress } from "../ui/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

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

const HomeMainCard = () => {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => axios.get("/mims-profile/profile"),
    select: (res: AxiosResponse<IResultResponse>): IResult => {
      return res.data.result;
    },
  });

  return (
    <View className="bg-white px-[18px] py-6 flex-col items-center justify-center gap-6 rounded-lg">
      <View className="flex-row gap-4 items-center justify-center">
        <Image
          source={{ uri: profile?.image || "fallback-image-uri" }}
          className="w-[100px] h-[100px] rounded-full"
        />

        <CircularProgress
          percentage={profile?.on_time.percentage || 0}
          pointsEarned={profile?.on_time.count || 0}
          totalPoints={profile?.on_time.total || 0}
        />
      </View>
      <View className="flex-col gap-[2px] items-center justify-center">
        <Text className="text-[32px] font-bold text-black">
          {profile?.name}
        </Text>
        <Text className="text-[20px] font-medium text-black mb-2">
          {profile?.desigantion}
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
