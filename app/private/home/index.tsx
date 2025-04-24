import { Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  CommunityCardIcon,
  DemandIcon,
  PencilIcon,
} from "~/assets/icon/svg.assets";
import BottomNavigator from "~/components/shared/BottomNavigator";
import CommonHeader from "~/components/shared/CommonHeader";
import HomeMainCard from "~/components/home/HomeMainCard";
import MyActivities from "~/components/home/myActivities";
import Challenges from "~/components/home/challenges";
import Community from "~/components/home/community";

const Home = () => {
  const { top } = useSafeAreaInsets();
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
              <Challenges ContainerProps={{}} />
            </ScrollView>
          </View>
        </View>
        <View className="mt-8">
          <View className="flex-row items-center gap-2">
            <PencilIcon />
            <Text className="font-bold  text-2xl">My Activities</Text>
          </View>
          <View className="my-4 gap-5">
            <MyActivities />
          </View>
        </View>
        <View className="mt-8">
          <View className="flex-row items-center gap-2">
            <CommunityCardIcon />
            <Text className="font-bold text-2xl">Community</Text>
          </View>
          <View className="my-4">
            <Community />
          </View>
        </View>
      </ScrollView>
      <BottomNavigator />
    </View>
  );
};

export default Home;
