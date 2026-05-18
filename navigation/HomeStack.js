import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CampusDetailScreen from "./screens/CampusDetailScreen";
import CustomHeader from "./components/CustomHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <CustomHeader title="Busleyden Atheneum" />,
          }}
        />
        <Stack.Screen
          name="CampusDetail"
          component={CampusDetailScreen}
          options={{
            header: () => <CustomHeader title="Campus Details" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
