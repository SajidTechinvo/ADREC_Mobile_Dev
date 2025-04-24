import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const getSession = async () => {
  const jwt = (await SecureStore.getItemAsync("app_jwt")) as string;
  return jwt;
};

export const addSession = async (token: string) => {
  await SecureStore.setItemAsync("app_jwt", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return;
};

export const removeSession = async () => {
  await SecureStore.deleteItemAsync("app_jwt");
  delete axios.defaults.headers.common["Authorization"];
};
