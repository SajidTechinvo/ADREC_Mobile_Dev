import { View, Text, Image } from "react-native";

const CommunityCard = () => {
  return (
    <View className="border  w-[240px] rounded-lg items-center border-white py-2 bg-white px-4">
      <View className="pt-2">
        <Image source={require("../../assets/images/communityimage.png")} />
        <View className="py-5 gap-2">
          <Text className="text-base font-bold">Management Faculty</Text>
          <Text className="text-base">
            Join our esteemed Management Faculty and enhance your leadership
            skills, drive innovation, and shape the future of business. Apply
            now and be part of excellence!
          </Text>
        </View>
        <View className="items-center pb-2">
          <View className="border border-[#169F9F] rounded-full px-4 py-2 w-full items-center">
            <Text className="text-[#169F9F] text-base font-normal ">
              Join today
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommunityCard;
