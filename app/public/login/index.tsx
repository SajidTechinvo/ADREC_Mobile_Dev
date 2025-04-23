import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { setUser } from "~/app/store/slices/userSlice";
import { loginFormSchema } from "~/app/types & schemas/auth/auth.schemas";
import {
  ICurrentApiResponse,
  ILoginFormType,
} from "~/app/types & schemas/auth/auth.types";
import {
  AxiosApiSuccessErrorResponse,
  AxiosErrorResponse,
} from "~/app/types & schemas/common.types";
import { LockIconSvg, OneHubLogoSvg } from "~/assets/icon/svg.assets";
import FormProvider from "~/components/hook-form/FormProvider";
import RHFTextfield from "~/components/hook-form/RHFTextfield";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { addSession } from "~/utils/session";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const methods = useForm<ILoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;

  const { mutate: loginUser, isPending: isLoading } = useMutation({
    mutationKey: ["auth/login"],
    mutationFn: (body: ILoginFormType) => axios.post("/dmt/login", body),
    onSuccess: async (
      res: AxiosApiSuccessErrorResponse<ICurrentApiResponse, any>
    ) => {
      if (res?.data) {
        await addSession(res?.data);

        dispatch(
          setUser({
            name: "test",
          })
        );

        router.replace("/private/home");
      }
    },
    onError: (err: AxiosErrorResponse) => {
      console.log(
        "error-->",
        err?.response?.data?.message ?? err?.response?.data
      );
    },
  });

  const onSubmit = async (data: ILoginFormType) => {
    loginUser(data);
  };
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
      >
        <View className="relative flex-1 items-center justify-center bg-white">
          <Image
            source={require("../../../assets/images/loginBg.png")}
            className="w-full h-full  absolute top-0 left-0 object-cover -z-0"
            style={{ resizeMode: "cover" }}
          />
          <View className="bg-white max-h-[600px] w-[90%] flex-1  rounded-lg px-[20px] py-[32px]">
            <View className="flex flex-col gap-4 justify-center items-center">
              <OneHubLogoSvg />
              <Image
                source={require("../../../assets/images/dmtLogo.png")}
                className="w-[238px] h-[66px]"
                style={{ resizeMode: "cover" }}
              />
            </View>
            <FormProvider methods={methods}>
              <View className="pt-12 flex-col gap-4 justify-center items-center w-full">
                <RHFTextfield
                  label="Email"
                  name="email"
                  keyboardType="email-address"
                  placeholder="Enter your email"
                />
                <RHFTextfield
                  name="password"
                  placeholder="Enter your password"
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
              <View className="pt-[30px] gap-4">
                <View className="flex-row gap-4 w-full justify-center items-center mt-4">
                  <Button
                    variant="default"
                    className="flex-1"
                    onPress={handleSubmit(onSubmit)}
                    isLoading={isLoading}
                  >
                    <Text className="text-white"> Login</Text>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Text className="text-[#169F9F]"> UAE Pass</Text>
                  </Button>
                </View>

                <Text className="text-[#169F9F] text-lg font-medium text-center mt-4">
                  Forgot Password ?
                </Text>
              </View>
            </FormProvider>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default Login;
