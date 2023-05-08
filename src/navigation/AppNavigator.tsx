import React from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../constants/routes";
import ReadPage from "../pages/Read/ReadPage";
import ListenPage from "../pages/Listen/ListenPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import AboutPage from "../pages/About/AboutPage";
import LinkPage from "../pages/Links/LinkPage";
import BottomTabNavigator from "./BottomTabNavigator";
import Home from "../pages/Home/Home";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.MAIN} component={BottomTabNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;