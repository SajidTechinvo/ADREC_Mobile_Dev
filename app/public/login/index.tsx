import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { LockIconSvg, OneHubLogoSvg } from "~/assets/icon/svg.assets";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { InputField } from "~/components/ui/inputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
      >
        <View className="relative h-full items-center justify-center bg-white">
          <Image
            source={require("../../../assets/images/loginBg.png")}
            className="w-full h-full  absolute top-0 left-0 object-cover -z-0"
            style={{ resizeMode: "cover" }}
          />
          <View className="bg-white w-[90%] h-[80%] rounded-lg px-[20px] py-[32px]">
            <View className="flex flex-col gap-4 justify-center items-center">
              <OneHubLogoSvg />
              <Image
                source={require("../../../assets/images/dmtLogo.png")}
                className="w-[238px] h-[66px]"
                style={{ resizeMode: "cover" }}
              />
            </View>
            <View className="pt-12 flex-col gap-4 justify-center items-center w-full">
              <InputField label="Username" required />
              <InputField
                placeholder="Type something..."
                size="default"
                label="Password"
                isPassword
                required
                startIcon={<LockIconSvg />}
              />
              <Checkbox
                label="Remember me"
                checked={rememberMe}
                onToggle={() => {
                  setRememberMe(!rememberMe);
                }}
              />
            </View>

            <View className="pt-[40px] gap-4 ">
              <View className="flex-row gap-4 w-full justify-center items-center mt-4">
                <Button variant="default">
                  <Text className="text-white"> Login</Text>
                </Button>{" "}
                <Button variant={"outline"}>
                  <Text className="text-[#169F9F]"> UAE Pass</Text>
                </Button>
              </View>
              <Text className="text-[#169F9F] text-lg font-medium text-center mt-4">
                Forgot Password ?
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default Login;
