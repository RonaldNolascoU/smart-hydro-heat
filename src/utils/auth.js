
import { storageKeys } from "../constant";
import storage from "./storage";

export const getTokens = () => ({
  accessToken: storage.get(storageKeys.ACCESS_TOKEN),
  refreshToken: storage.get(storageKeys.REFRESH_TOKEN),
});

export const hasTokens = () => {
  const { accessToken, refreshToken } = getTokens();

  return Boolean(accessToken && refreshToken);
};

export const setTokens = ({ accessToken, refreshToken }) => {
  if (accessToken) storage.set(storageKeys.ACCESS_TOKEN, accessToken);

  if (refreshToken) storage.set(storageKeys.REFRESH_TOKEN, refreshToken);
};