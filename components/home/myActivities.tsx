import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import MyActivitiesCard from "../gernalCard/myActivitiesCard";

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
const MyActivities = () => {
  const { data: activity, isLoading } = useQuery({
    queryKey: ["activity"],
    queryFn: () => axios.get("/my-activity"),
    select: (res: AxiosResponse<IActivityResponse>): IActivity[] => {
      return res.data.result;
    },
  });
  return (
    <View>
      <MyActivitiesCard data={activity} isLoading={isLoading} />
    </View>
  );
};

export default MyActivities;
