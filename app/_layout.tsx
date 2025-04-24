import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  Theme,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { useEffect } from "react";
// import "react-native-reanimated";
import "../global.css";
import { enableFreeze } from "react-native-screens";
import axios from "axios";
import { AxiosErrorResponse } from "~/types & schemas/common.types";
import { API_BASE_URL } from "~/config/baseUrl";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "~/store";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

enableFreeze(true);
SplashScreen.preventAutoHideAsync();

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosErrorResponse) => {
    if (!!error?.request?._headers?.["skip_error_message"]) {
      return Promise.reject(error);
    }
    // if (error.response?.data.message) {
    //   useDialogState
    //     .getState()
    //     .setErrorDialog({ open: true, message: error.response.data.message });
    // }
    return Promise.reject(error);
  }
);

const queryClient = new QueryClient({});

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
          <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
