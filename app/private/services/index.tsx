import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowDownIconSvg,
  CalendarIcon,
  GraphIcon,
  IconLogo,
  NameLogo,
  SearchIcon,
} from "~/assets/icon/svg.assets";
import Challenges from "~/components/home/challenges";
import MyFavorite from "~/components/services/myFavorite";
import PopularServices from "~/components/services/popularServices";
import RequiredAttention from "~/components/services/requiredAttention";
import BottomNavigator from "~/components/shared/BottomNavigator";
import CommonHeader from "~/components/shared/CommonHeader";

const Services = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-[#e8f5f5] px-4 " style={{ paddingTop: top }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CommonHeader />
        <View className="mt-8">
          <View className="flex-row  items-end justify-end ">
            <View className="bg-[#169F9F] items-center  rounded-full flex-row  gap-2 px-4 py-2">
              <Text className="text-base text-white">Find Services</Text>
              <SearchIcon />
            </View>
          </View>
          <View className="mt-5">
            <View className="flex-row items-center gap-2">
              <IconLogo />
              <Text className="font-bold text-3xl">Services</Text>
            </View>
          </View>
          <View className="mt-12">
            <View className="flex-row items-center gap-2">
              <CalendarIcon />
              <Text className="font-bold text-2xl">
                Activities & Challenges
              </Text>
            </View>
            <View className="mt-4">
              <Text className="text-base color-black">
                An overview of activities and performance metrics from your
                portfolio. Any queries please contact Fara on{" "}
                <Text className="font-bold text-[#169F9F]">
                  fara@adrec.org.
                </Text>
              </Text>
            </View>
            <View className="my-4 ">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-2">
                  <View className="bg-[#F0F3F5] px-4 py-2 rounded-md">
                    <View className="flex-row items-center gap-3 ">
                      <NameLogo />
                      <Text className="font-bold text-base">
                        Ranch Allocation
                      </Text>
                    </View>
                  </View>
                  <View className="bg-white px-4 py-2 rounded-md">
                    <View className="flex-row items-center gap-3 ">
                      <NameLogo />
                      <Text className="font-bold text-base">
                        Plot Subdivision & Merging
                      </Text>
                    </View>
                  </View>
                  <View className="bg-white px-4 py-2 rounded-md">
                    <View className="flex-row items-center gap-3 ">
                      <NameLogo />
                      <Text className="font-bold text-base">
                        Ranch Allocation
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View className="bg-[#F0F3F5] border border-[#F0F3F5] rounded-md py-5 ">
              <View className=" pb-2  flex-row  items-end justify-end">
                <View className="border border-[#169F9F] rounded-full px-4 py-2 w-[50%] items-center">
                  <Text className="text-[#169F9F] text-base font-normal ">
                    Go to Service
                  </Text>
                </View>
              </View>
              <View className="my-5">
                <View className="flex-row items-center gap-2 bg-white justify-between px-4 py-2 ">
                  <Text className="text-base">Overall performance</Text>
                  <ArrowDownIconSvg color="black" />
                </View>
              </View>
              <View>
                <GraphIcon />
              </View>

              <View className="my-3">
                <Challenges
                  ContainerProps={{
                    className: "flex-col",
                  }}
                />
              </View>
              <View className="mt-7">
                <View>
                  <Text className="font-bold text-2xl">Requires Attention</Text>
                </View>
                <View className="mt-4 ">
                  <RequiredAttention />
                </View>
              </View>
              <View className="mt-7">
                <Text className="font-bold text-2xl">In Approval</Text>
                <View className="mt-2">
                  <RequiredAttention />
                </View>
              </View>
            </View>
            <View className="mt-2">
              <MyFavorite />
            </View>
            <View className="mt-8">
              <PopularServices />
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavigator />
    </View>
  );
};

export default Services;
