import { ScrollView, Text, View } from "react-native";
import { CrossIconSvg } from "~/assets/icon/svg.assets";
import ActivityCard from "~/components/shared/ActivityCard";
import { InputField } from "~/components/ui/inputField";

const Activities = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#414149] px-4 pt-[100px]">
      <View className="absolute top-16 right-8 bottom-0 ">
        <CrossIconSvg color="#fff" />
      </View>
      <View className="flex-1 flex-col items-center justify-center w-full px-4 ">
        <View className="bg-[#3a3a42] w-full pb-8">
          <Text className="text-white text-[32px] font-bold ">
            My Activities
          </Text>
        </View>
        <InputField
          className="bg-[#414149] border-[#414149] h-[50px] "
          inputClassName="text-white font-bold"
          placeholder="Placeholder"
        />
        <ScrollView contentContainerStyle={{ paddingBottom: 100, gap: 32 }}>
          <View className="bg-[#3a3a42] pt-8 w-full">
            <Text className="text-white text-[24px] font-bold ">
              Requires Attention
            </Text>
            <View className="flex-col gap-4 ">
              <ActivityCard
                status="Payment Failed"
                tag="Ranch Allocation"
                id="102839239829"
                customer="Ali Jasem"
                onPressResolve={() => console.log("Resolve Pressed")}
              />
              <ActivityCard
                status="2 Days Remaining"
                tag="Ranch Allocation"
                id="102839239829"
                customer="Ali Jasem"
                onPressResolve={() => console.log("Resolve Pressed")}
              />
              <View className="w-full border-t-2 border-t[#3a3a42] mt-[10.5px]">
                <View className="h-4 bg-[#3a3a42] w-full mt-[2.5px]"></View>
              </View>
            </View>
          </View>
          <View className="bg-[#3a3a42] pt-8 w-full">
            <Text className="text-white text-[24px] font-bold ">
              Request Clarification{" "}
            </Text>
            <View className="flex-col gap-4 ">
              <ActivityCard
                status="Approval Pending"
                tag="Ranch Allocation"
                id="102839239829"
                customer="Ali Jasem"
                onPressResolve={() => console.log("Resolve Pressed")}
              />{" "}
              <View className="w-full border-t-2 border-t[#3a3a42] mt-[10.5px]">
                <View className="h-4 bg-[#3a3a42] w-full mt-[2.5px]"></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Activities;
