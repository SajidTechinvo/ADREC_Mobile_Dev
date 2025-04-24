import { View, Text } from "react-native";
import { StarIcon } from "~/assets/icon/svg.assets";
import FavoriteCard from "../gernalCard/favoriteCard";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

export type IFavoriteResponse = IFavorite[];

export interface IFavorite {
  title: string;
  description: string;
  tags: string[];
}

const MyFavorite = () => {
  const { data: myFavorite } = useQuery({
    queryKey: ["myFavorite"],
    queryFn: () => axios.get("/mims-profile/favorites"),
    select: (res: AxiosResponse<IFavoriteResponse>): IFavorite[] => {
      return res.data;
    },
  });
  console.log(myFavorite);
  return (
    <View>
      <View className="flex-row items-center gap-5">
        <StarIcon />
        <Text className="font-bold text-2xl">My Favourites</Text>
      </View>
      <View className="bg-white border border-[#F0F3F5] rounded-2xl py-5 mt-5 px-4 gap-4">
        <FavoriteCard data={myFavorite} />
      </View>
    </View>
  );
};

export default MyFavorite;
