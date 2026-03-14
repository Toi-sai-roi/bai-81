import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}