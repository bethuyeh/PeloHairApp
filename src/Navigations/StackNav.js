import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import OneKServices from "../Screens/1kServices";
import Articles from "../Screens/Articles"
import Quiz from "../Screens/Quiz"
import Proffesional from "../Screens/Proffesional"
import SaloonScreen from "../Screens/SaloonScreen"
import StylistsScreen from "../Screens/StylistsScreen"
import Tutorials from "../Screens/Tutorials"
import VendorsScreen from "../Screens/VendorsScreen"
import SingleCard from "../Screens/SingleCard"
import ViewCart from "../Screens/ViewCart";
import Payment from "../Screens/Payment";
import Paystack from "../Screens/Paystack"
import Summary from "../Screens/Summary";



const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="onekservices" component={OneKServices} />
      <Stack.Screen name="articles" component={Articles} />
      <Stack.Screen name="quiz" component={Quiz} />
      <Stack.Screen name="advisory" component={Proffesional} />
      <Stack.Screen name="saloon" component={SaloonScreen} />
      <Stack.Screen name="stylists" component={StylistsScreen} />
      <Stack.Screen name="vendors" component={VendorsScreen} />
      <Stack.Screen name="tutorials" component={Tutorials} />
      <Stack.Screen name="singlecard" component={SingleCard} />
      <Stack.Screen name="viewcart" component={ViewCart} />
      <Stack.Screen name="payment" component={Payment} />
      <Stack.Screen name="summary" component={Summary} />
      <Stack.Screen name="paystack" component={Paystack} />
      
    </Stack.Navigator>
  );
};

export default StackNav;
