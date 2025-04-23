import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowDownIconSvg,
  BulbIcon,
  CalendarIcon,
  ColorCircleIcon,
  GraphIcon,
  IconLogo,
  NameLogo,
  SearchIcon,
  StarIcon,
} from "~/assets/icon/svg.assets";
import BottomNavigator from "~/components/shared/BottomNavigator";
import ChallengesCard from "~/components/shared/ChallengesCard";
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
            <View className="bg-[#F0F3F5] border border-[#F0F3F5] rounded-md py-5 px-4 ">
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

              <View className="w-full items-center my-6 gap-3">
                <ChallengesCard
                  classes="w-full"
                  TitleProps="11 Days"
                  desProps=" Average time to close applications"
                />
                <ChallengesCard
                  classes="w-full"
                  TitleProps="19 Days"
                  desProps="Number closed in the past 30 days"
                />
              </View>
              <View className="mt-2">
                <View>
                  <Text className="font-bold text-2xl">Requires Attention</Text>
                </View>
                <View className="mt-2">
                  <View className="border bg-white border-[#F0F3F5] rounded-md py-5 mt-2  px-4">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-base font-bold w-[30%]">
                        Request Ranch...
                      </Text>
                      <View className="gap-1">
                        <Text className="text-base font-bold">
                          Payment Failed
                        </Text>
                        <Text className="text-base">P102839239829</Text>
                      </View>
                    </View>
                    <View className="flex-row items-center pt-2 justify-between">
                      <View className="gap-1">
                        <Text className="text-base">Abu Dhabi City</Text>
                        <ColorCircleIcon />
                      </View>
                      <View>
                        <Text>10 Days Remaining</Text>
                      </View>
                    </View>
                  </View>
                  <View className="border bg-white border-[#F0F3F5] rounded-md py-5 mt-2  px-4">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-base font-bold w-[30%]">
                        Request Ranch...
                      </Text>
                      <View className="gap-1">
                        <Text className="text-base font-bold">
                          Plot Required
                        </Text>
                        <Text className="text-base">P102839239829</Text>
                      </View>
                    </View>
                    <View className="flex-row items-center pt-2 justify-between">
                      <View className="gap-1">
                        <Text className="text-base">Abu Dhabi City</Text>
                        <ColorCircleIcon />
                      </View>
                      <View>
                        <Text className="text-base color-[#EE3E43] font-bold">
                          2 Days Remaining
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="mt-7">
                <View>
                  <Text className="font-bold text-2xl">In Approval</Text>
                </View>
                <View className="mt-2">
                  <View className="border bg-white border-[#F0F3F5] rounded-md py-5 mt-2  px-4">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-base font-bold w-[30%]">
                        Request Ranch...
                      </Text>
                      <View className="gap-1 items-end">
                        <Text className="text-base font-bold  color-black">
                          Fahima Ali
                        </Text>
                        <Text className="text-base  color-black">
                          P102839239829
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-center pt-2 justify-between">
                      <View className="gap-1">
                        <Text className="text-base  color-black">
                          Abu Dhabi City
                        </Text>
                        <ColorCircleIcon />
                      </View>
                      <View>
                        <Text className="text-base color-black font-bold">
                          8 Days Remaining
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View className="border bg-white border-[#F0F3F5] rounded-md py-5 mt-2  px-4">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-base font-bold w-[30%] color-black">
                        Request Ranch...
                      </Text>
                      <View className="gap-1 items-end">
                        <Text className="text-base font-bold color-black">
                          Mohammed A
                        </Text>
                        <Text className="text-base color-black">
                          P102839239829
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-center pt-2 justify-between">
                      <View className="gap-1">
                        <Text className="text-base">Abu Dhabi City</Text>
                        <ColorCircleIcon />
                      </View>
                      <View>
                        <Text className="text-base color-black font-bold">
                          12 Days Remaining
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="mt-8">
              <View className="flex-row items-center gap-5">
                <StarIcon />
                <Text className="font-bold text-2xl">My Favourites</Text>
              </View>
              <View className="bg-white border border-[#F0F3F5] rounded-md py-5 mt-5 px-4 gap-4">
                <View className="bg-[#F0F3F5] py-2 px-4 pt-4">
                  <View className="flex-row items-center gap-2 justify-between pb-4">
                    <Text className="text-3xl font-bold">EID Holidays</Text>
                    <StarIcon />
                  </View>

                  <Text>Useful calendar for your planning.</Text>
                  <View className="flex-row items-center gap-2 pt-3">
                    <View className="bg-[#D0EBFF] px-3 py-2 rounded-full">
                      <Text className="text-[#345D96] text-sm">Management</Text>
                    </View>
                    <View className="bg-[#D0EBFF] px-3 py-2 rounded-full">
                      <Text className="text-[#345D96] text-sm">Vacation</Text>
                    </View>
                  </View>
                </View>
                <View className="bg-[#F0F3F5] py-2 px-4 pt-4">
                  <View className="flex-row items-center gap-2 justify-between pb-4">
                    <Text className="text-3xl font-bold w-[70%]">
                      ADRC Performance Awards 2025
                    </Text>
                    <StarIcon />
                  </View>

                  <Text>Latest updates on date and times.</Text>
                  <View className="flex-row items-center gap-2 pt-3">
                    <View className="bg-[#D0EBFF] px-3 py-2 rounded-full">
                      <Text className="text-[#345D96] text-sm">
                        Performance
                      </Text>
                    </View>
                    <View className="bg-[#D0EBFF] px-3 py-2 rounded-full">
                      <Text className="text-[#345D96] text-sm">Community</Text>
                    </View>
                    <View className="bg-[#D0EBFF] px-3 py-2 rounded-full">
                      <Text className="text-[#345D96] text-sm">Event</Text>
                    </View>
                  </View>
                </View>
                <View className="bg-[#F0F3F5] py-2 px-4 pt-4">
                  <View className="flex-row items-center gap-2 justify-between pb-4">
                    <Text className="text-3xl font-bold w-[70%]">
                      Management Faculty
                    </Text>
                    <StarIcon />
                  </View>

                  <Text>
                    eLearning dedicated to improving your management skills
                  </Text>
                  <View className="flex-row items-center gap-2 pt-3">
                    <View className="bg-[#D0EBFF] px-3 py-2 rounded-full">
                      <Text className="text-[#345D96] text-sm">
                        Performance
                      </Text>
                    </View>
                    <View className="bg-[#D0EBFF] px-3 py-2 rounded-full">
                      <Text className="text-[#345D96] text-sm">Community</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="mt-8">
              <View className="flex-row items-center gap-5">
                <BulbIcon />
                <Text className="font-bold text-2xl">Popular Services</Text>
              </View>
              <View className="bg-white border border-[#F0F3F5] rounded-md py-5 mt-5 px-4 gap-4 mb-2">
                <View className="bg-[#F0F3F5] py-2 px-4 pt-4">
                  <View className="flex-row  items-center  gap-5  ">
                    <IconLogo />
                    <Text className="text-3xl font-bold w-[70%]">
                      Land Use and Zoning
                    </Text>
                  </View>

                  <Text className="text-base w-[80%] ml-5 pt-3">
                    Zoning guidelines and land-use classifications.
                  </Text>
                </View>
                <View className="bg-[#F0F3F5] py-2 px-4 pt-4">
                  <View className="flex-row  items-center  gap-5  ">
                    <IconLogo />
                    <Text className="text-3xl font-bold w-[75%]">
                      Plot Subdivision & Merging
                    </Text>
                  </View>

                  <Text className="text-base w-[80%] ml-5 pt-3">
                    Enables landowners to divide or merge plots.
                  </Text>
                </View>
                <View className="bg-[#F0F3F5] py-2 px-4 pt-4">
                  <View className="flex-row  items-center  gap-5  ">
                    <IconLogo />
                    <Text className="text-3xl font-bold w-[80%]">
                      Real Estate Transactions & Approvals
                    </Text>
                  </View>

                  <Text className="text-base w-[80%] ml-5 pt-3">
                    Facilitates property transactions, sales, and title
                    transfers.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavigator />
    </View>
  );
};

export default Services;
