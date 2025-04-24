import { View, Text } from "react-native";
import { ColorCircleIcon } from "~/assets/icon/svg.assets";
import { Button } from "../ui/button";

const MyActivitiesCard = ({ data: activity }: { data: any }) => {
  return (
    <View>
      {activity?.map((activity, index) => {
        return (
          <View className="border rounded-md border-white py-2 my-2 bg-white px-4">
            <View className="flex-col gap-2" key={index}>
              <View className="gap-3 pt-2">
                <Text className="text-base font-bold">{activity?.title}</Text>
                <View className="flex-row items-center gap-2">
                  <Text className="text-base font-bold">
                    {activity.description}
                  </Text>
                </View>
                <View>
                  <ColorCircleIcon />
                </View>
                <Text> {activity.days} Days Remaining</Text>
                <Button
                  variant={"default"}
                  className=" bg-black w-[50%] my-2 py-2"
                >
                  <Text className="text-sm text-white">{activity.tag}</Text>
                </Button>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default MyActivitiesCard;
