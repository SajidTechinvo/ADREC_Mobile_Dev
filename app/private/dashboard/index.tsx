import { IconSymbol } from "@/components/ui/IconSymbol";
import { AntDesign } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Dashboard = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      className="flex-1  bg-gradient-to-r from-white-100 to-teal-500"
      style={{ paddingTop: top }}
    >
      <View className="mt-1 mx-4 py-1 flex-row justify-between">
        <Image source={require("@/assets/images/avatar.png")} />
        <View className="flex-row gap-2 items-center">
          <Image source={require("@/assets/images/Settings.png")} />
          <Image source={require("@/assets/images/Bell.png")} />
          <Image source={require("@/assets/images/Add.png")} />
        </View>
      </View>
      <View className="flex-1 ">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginHorizontal: 16 }}>
            <View className=" bg-white mt-8 rounded-lg">
              <View className="flex-row justify-center gap-4 items-center p-4">
                <Image source={require("@/assets/images/woman.png")} />
                <Image source={require("@/assets/images/ Chart.png")} />
              </View>
              <View className="mt-4 mb-3">
                <Text className="text-center text-3xl color-black font-bold">
                  Farzana Shah
                </Text>
                <Text className="text-center text-xl color-black font-medium">
                  Service Agent
                </Text>
              </View>
              <View className="flex-row justify-center gap-1 items-center border border-[#169F9F] w-[25%] mx-auto  py-1 rounded-full">
                <Text className="text-[#169F9F] font-medium  text-xs">
                  More{" "}
                </Text>
                <AntDesign name="down" size={12} color="#169F9F" />
              </View>
              <View className="flex-row justify-center gap-1 items-center my-6 bg-[#169F9F] border border-[#169F9F] w-[80%] mx-auto  py-2 rounded-full">
                <Text className="text-white font-medium  text-xl">
                  Check-in to OneHub{" "}
                </Text>
              </View>
            </View>
            <View className="mt-10">
              <View className="flex-row gap-2 items-center">
                <Image source={require("@/assets/images/Demand.png")} />
                <Text className="text-2xl color-black font-bold">
                  Challenges
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;
