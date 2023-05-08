import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home/Home";
import ReadPage from "../pages/Read/ReadPage";
import ListenPage from "../pages/Listen/ListenPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import AboutPage from "../pages/About/AboutPage";
import LinkPage from "../pages/Links/LinkPage";
import ROUTES from "../constants/routes";
import CustomIcon from "../components/Icon/CustomIcon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={ROUTES.HOME} screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === ROUTES.READ) {
          iconName = 'book-reader';
        } else if (route.name === ROUTES.LISTEN) {
          iconName = 'headphones';
        } else if (route.name === ROUTES.GALLERY) {
          iconName = 'photo-video';
        } else if (route.name === ROUTES.ABOUT) {
          iconName = 'info';
        } else if (route.name === ROUTES.LINKS) {
          iconName = 'link';
        }

        return <CustomIcon name={iconName} size={size} color={color} iconSet='FontAwesome5' />;
      },
      tabBarActiveTintColor:'#009FBD',
      tabBarInactiveTintColor: '#393646',
      headerShown:false
    })}>
       <Tab.Screen name={ROUTES.HOME} component={Home} options={{ tabBarButton: () => null }}  />
      <Tab.Screen name={ROUTES.READ} component={ReadPage}  />
      <Tab.Screen name={ROUTES.LISTEN} component={ListenPage} />
      <Tab.Screen name={ROUTES.GALLERY} component={GalleryPage} />
      <Tab.Screen name={ROUTES.ABOUT} component={AboutPage} />
      <Tab.Screen name={ROUTES.LINKS} component={LinkPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;