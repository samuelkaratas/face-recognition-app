import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import FailScreen from "../screens/FailScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Face Recognition",
            headerStyle: {
              backgroundColor: "#fc9208",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Fail"
          component={FailScreen}
          options={{
            title: "Auth Failed",
            headerStyle: {
              backgroundColor: "#ff5050",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{
            title: "Wellcome",
            headerStyle: {
              backgroundColor: "#fc9208",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
