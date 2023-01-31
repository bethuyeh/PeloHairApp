import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar } from "native-base";
import  SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen"
import BottomNav from "./src/Navigations/BottomNav"



import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
     <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="signin"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="signin" component={SignInScreen} />
          <Stack.Screen name="signup" component={SignUpScreen}/>
          <Stack.Screen name="bottom" component={BottomNav} />

        </Stack.Navigator>
      </NavigationContainer> 
    </NativeBaseProvider>
  );
}

export default App;