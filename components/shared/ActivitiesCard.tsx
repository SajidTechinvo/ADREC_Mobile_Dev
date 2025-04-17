import { View, Text } from "react-native";
import { ColorCircleIcon } from "~/assets/icon/svg.assets";
import { Button } from "../ui/button";

const ActivitiesCard = () => {
  return (
    <View className="border rounded-md border-white py-2 bg-white px-4">
      <View className="flex-col gap-2 ">
        <View className="gap-3 pt-2">
          <Text className="text-base font-bold">Request Ranch Allocation</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-base font-bold">Payment Failed</Text>
            <Text className="text-base ">102839239829</Text>
          </View>
          <View>
            <ColorCircleIcon />
          </View>
          <Text>3 Days Remaining</Text>
          <Button variant={"default"} className=" bg-black w-[50%] my-2 py-2">
            <Text className="text-sm text-white">Land Allocation</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ActivitiesCard;
