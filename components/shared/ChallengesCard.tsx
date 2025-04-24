import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { View, Text, ScrollView, Image } from "react-native";

export interface IChallengeResponse {
  result: IChallenge[];
  success: boolean;
  error: any;
}

export interface IChallenge {
  title: string;
  description: string;
  type: number;
  value: number;
  badge: string;
}

const ChallengesCard = () => {
  const { data: Challenge } = useQuery({
    queryKey: ["challenge"],
    queryFn: () => axios.get("/challenge"),
    select: (res: AxiosResponse<IChallengeResponse>): IChallenge[] => {
      return res.data.result;
    },
  });

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Challenge?.map((challenge, index) => {
          return (
            <View
              className="border rounded-md border-white py-2 mx-2 bg-white"
              key={index}
            >
              <View className="pt-2">
                <View className="flex-row items-center justify-between pb-5 pt-2 px-3">
                  <Text className="text-2xl font-bold">
                    {challenge?.value} Days
                  </Text>
                  <Text className=" text-base w-[130px] color-black">
                    {challenge.title}
                  </Text>
                </View>
                <View className="flex-row items-center gap-5 mb-3 px-3 py-1 border rounded-md border-gray-100 mx-3">
                  <Image
                    source={{ uri: challenge.badge }}
                    className="w-[50px] h-[50px]"
                  />
                  <Text className="text-base w-[210px]">
                    {challenge.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChallengesCard;
