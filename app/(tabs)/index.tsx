import { useContext } from "react";
import { AppContext, AppProvider } from "../../src/context/AppContext";
import AuthStack from "../../src/navigation/AuthStack";
import MainStack from "../../src/navigation/MainStack";
import { NavigationIndependentTree, NavigationContainer } from "@react-navigation/native";

function AppNavigator() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}