import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {  createStackNavigator } from "@react-navigation/stack";
import HomePage from "../page/Home/Home";
import ROUTES from "../routes/ROUTES";
import ProductListPage from "../page/ProductList/ProductListPage";
import ProductDetailPage from "../page/ProductDetail/ProductDetailPage";
import BuyProductPage from "../page/BuyProduct/BuyProductPage";
import BasketPage from "../page/Basket/BasketPage";



const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomePage} name={ROUTES.HOME}  />
      <Stack.Screen component={ProductListPage} name={ROUTES.PRODUCTLIST}  />
      <Stack.Screen component={ProductDetailPage} name={ROUTES.PRODUCTDETAIL} />
      <Stack.Screen component={BasketPage} name={ROUTES.BASKET} />
      <Stack.Screen component={BuyProductPage} name={ROUTES.BUYPRODUCT}  />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  
};


export default AppNavigator;