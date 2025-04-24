import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { View } from "react-native";
import ChallengesCard from "../gernalCard/challengesCard";

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
const Challenges = ({ ContainerProps }: { ContainerProps: any }) => {
  const { data: Challenge } = useQuery({
    queryKey: ["challenge"],
    queryFn: () => axios.get("/challenge"),
    select: (res: AxiosResponse<IChallengeResponse>): IChallenge[] => {
      return res.data.result;
    },
  });
  return (
    <View>
      <ChallengesCard data={Challenge} ContainerProps={ContainerProps} />
    </View>
  );
};

export default Challenges;
