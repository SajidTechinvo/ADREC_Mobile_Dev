import ONEHUBLogo from "@/assets/icon/svg.assets";
import CommonButton from "@/components/ui/CommonButton";
import CommonTextInput from "@/components/ui/commonFields/CommonTextInput";
import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View
        style={{ flex: 1 }}
        className="relative flex-1 items-center justify-center bg-white"
      >
        <Image
          source={require("../../../assets/images/loginBg.png")}
          className="w-full h-full absolute top-0 left-0 object-cover -z-0"
          style={{ resizeMode: "cover" }}
        />
        <View className="bg-white w-[90%] h-[80%] rounded-lg px-[20px] py-[32px]">
          <View className="flex flex-col gap-4 justify-center items-center">
            <ONEHUBLogo />
            <Image
              source={require("../../../assets/images/DMTLogo.png")}
              className="w-[238px] h-[66px]"
              style={{ resizeMode: "cover" }}
            />
          </View>
          <View className="mt-[48px] gap-4 ">
            <CommonTextInput
              label="Username"
              className=" gap-[10px] "
              inputClassName="border border-[#E7E7E8]  h-[50px]"
            />
            <CommonTextInput
              label="Password"
              placeholder="Enter your password"
              // value={password}
              // onChangeText={setPassword}
              inputClassName="h-[50px]"
              className="relative "
              secureTextEntry={true}
            />
            <View className="flex justify-center items-center mb-6">
              <View className="flex-row items-center mt-2">
                <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  className={`w-5 h-5 rounded border mr-2 ${
                    rememberMe
                      ? "bg-[#6EC1E4] border-[#6EC1E4]"
                      : "border-gray-400"
                  } flex items-center justify-center`}
                >
                  {rememberMe && (
                    <Text className="text-white font-bold text-sm">✓</Text>
                  )}
                </TouchableOpacity>
                <Text className="text-base text-gray-700 ">Remember Me</Text>
              </View>
            </View>
            <View className="flex-row gap-4 w-full justify-center items-center mt-4">
              <CommonButton
                variant="primary"
                size="medium"
                isLoading={false}
                // icon={() => <MyIconComponent />}
                onPress={() => console.log("Pressed")}
              >
                Login
              </CommonButton>
              <CommonButton
                variant="primary"
                size="medium"
                isLoading={false}
                // icon={() => <MyIconComponent />}
                onPress={() => console.log("Pressed")}
              >
                UAE Pass
              </CommonButton>
            </View>
            <Text className="text-[#169F9F] text-lg font-medium text-center mt-4">
              Forgot Password ?
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
