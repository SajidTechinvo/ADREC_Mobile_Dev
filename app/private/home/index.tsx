import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  CommunityCardIcon,
  DemandIcon,
  PencilIcon,
} from "~/assets/icon/svg.assets";
import CommunityCard from "~/components/shared/CommunityCard";
import ActivitiesCard from "~/components/shared/ActivitiesCard";
import BottomNavigator from "~/components/shared/BottomNavigator";
import ChallengesCard from "~/components/shared/ChallengesCard";
import CommonHeader from "~/components/shared/CommonHeader";
import HomeMainCard from "~/components/shared/HomeMainCard";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  return (
    <View className="flex-1 bg-[#e8f5f5] px-4 " style={{ paddingTop: top }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CommonHeader />
        <View className="my-8">
          <HomeMainCard />
        </View>
        <View>
          <View className="flex-row items-center gap-2">
            <DemandIcon />
            <Text className="font-bold  text-2xl">Challenges</Text>
          </View>
          <View className="my-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row gap-4">
                <ChallengesCard
                  TitleProps="11 Days"
                  desProps=" Average time to close applications"
                />
                <ChallengesCard
                  TitleProps="12 Days"
                  desProps=" Average time to close applications"
                />
                <ChallengesCard
                  TitleProps="13 Days"
                  desProps=" Average time to close applications"
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View className="mt-8">
          <View className="flex-row items-center gap-2">
            <PencilIcon />
            <Text className="font-bold  text-2xl">My Activities</Text>
          </View>
          <View className="my-4 gap-5">
            <ActivitiesCard />
            <ActivitiesCard />
            <ActivitiesCard />
          </View>
        </View>
        <View className="mt-8">
          <View className="flex-row items-center gap-2">
            <CommunityCardIcon />
            <Text className="font-bold  text-2xl">Community</Text>
          </View>
          <View className="my-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row gap-4">
                <CommunityCard />
                <CommunityCard />
                <CommunityCard />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <BottomNavigator />
    </View>
  );
};

export default Home;
