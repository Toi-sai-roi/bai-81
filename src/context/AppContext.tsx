import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useEffect, useState } from "react";

const LOGIN_KEY = "LOGIN_KEY";

type AppContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [restoring, setIsRestoring] = useState(true);

  // Khi khởi động app: lấy trạng thái đăng nhập từ AsyncStorage
  const getLoggedInStatus = useCallback(async () => {
    try {
      const loggedInState = await AsyncStorage.getItem(LOGIN_KEY);
      setIsLoggedIn(loggedInState ? JSON.parse(loggedInState) : false);
      setIsRestoring(false);
    } catch (e) {
      return false;
    }
  }, []);

  // Mỗi khi isLoggedIn thay đổi: lưu lại vào AsyncStorage
  const cacheLoggedInStatus = useCallback(async (loggedInState: boolean) => {
    try {
      await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(loggedInState));
    } catch (e) {
      return false;
    }
  }, []);

  useEffect(() => {
    getLoggedInStatus();
  }, [getLoggedInStatus]);

  useEffect(() => {
    cacheLoggedInStatus(isLoggedIn);
  }, [cacheLoggedInStatus, isLoggedIn]);

  if (restoring) return null;

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}