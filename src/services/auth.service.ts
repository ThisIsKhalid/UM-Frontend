import { authkey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authkey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authkey);

  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authkey);

  return !!authToken; // double negotiation : true or false return korbe
};


export const removeUserInfo = (key:string) => {
  return localStorage.removeItem(key)
}
