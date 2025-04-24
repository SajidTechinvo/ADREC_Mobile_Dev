import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { View } from "react-native";
import RequiredAttentionCard from "../gernalCard/requiredAttentionCard";

export interface IActivityResponse {
  result: IActivity[];
  success: boolean;
  error: any;
}

export interface IActivity {
  title: string;
  description: string;
  days: number;
  tag: string;
}
const RequiredAttention = () => {
  const { data: activity } = useQuery({
    queryKey: ["activity"],
    queryFn: () => axios.get("/my-activity"),
    select: (res: AxiosResponse<IActivityResponse>): IActivity[] => {
      return res.data.result;
    },
  });
  return (
    <View>
      <RequiredAttentionCard data={activity} />
    </View>
  );
};

export default RequiredAttention;
