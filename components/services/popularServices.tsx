import { View, Text } from "react-native";
import PopularCard from "../gernalCard/popularCard";
import { BulbIcon } from "~/assets/icon/svg.assets";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export type IPopularServicesResponse = IPopularServices[];

export interface IPopularServices {
  title: string;
  description: string;
}

const PopularServices = () => {
  const { data: popularServices, isLoading } = useQuery({
    queryKey: ["popularServices"],
    queryFn: () => axios.get("/workflow/popular"),
    select: (
      res: AxiosResponse<IPopularServicesResponse>
    ): IPopularServices[] => {
      return res.data;
    },
  });

  return (
    <View>
      <View className="flex-row items-center gap-5">
        <BulbIcon />
        <Text className="font-bold text-2xl">Popular Services</Text>
      </View>
      <View className="bg-white border border-[#F0F3F5] rounded-2xl py-5 mt-5 px-4 gap-4 mb-2">
        <PopularCard data={popularServices} isLoading={isLoading} />
      </View>
    </View>
  );
};

export default PopularServices;
