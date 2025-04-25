import { View, Text } from "react-native";
import { ColorCircleIcon } from "~/assets/icon/svg.assets";
import { Button } from "../ui/button";
import CustomSkeleton from "../shared/CustomSkeleton";
import { LinearGradient } from "expo-linear-gradient";

const MyActivitiesCard = ({
  data: activity,
  isLoading = false,
}: {
  data: any;
  isLoading?: boolean;
}) => {
  return (
    <View>
      {isLoading ? (
        <>
          {[0, 1, 2, 3, 4].map((index) => (
            <CustomSkeleton height={100} key={index} />
          ))}
        </>
      ) : (
        <>
          {activity?.map((activity, index) => {
            return (
              <View
                key={index}
                className="border rounded-md border-white my-2 bg-white"
              >
                <LinearGradient
                  colors={[index === 0 ? "#FCD8D980" : "#fff", "#fff"]}
                  start={{ x: 1, y: 0.75 }}
                  end={{ x: 0.3, y: 0.25 }}
                  style={{ flex: 1, borderRadius: 10 }}
                >
                  <View className="flex-col gap-2 py-2 px-4">
                    <View className="gap-3 pt-2">
                      <Text className="text-base font-bold">
                        {activity?.title}
                      </Text>
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
                        <Text className="text-sm text-white">
                          {activity.tag}
                        </Text>
                      </Button>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};

export default MyActivitiesCard;
