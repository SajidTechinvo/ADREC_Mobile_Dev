import { View, ScrollView } from "react-native";
import CommunityCard from "../gernalCard/communityCard";

const Community = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CommunityCard />
      </ScrollView>
    </View>
  );
};

export default Community;
