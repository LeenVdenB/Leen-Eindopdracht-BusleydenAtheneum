import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import NewsScreen from "../screens/NewsScreen";
import ProductScreen from "../screens/ProductScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 10,
          height: 90,
          paddingTop: 16,
        },
        tabBarActiveTintColor: "#86BC25",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="NewsTab"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ProductTab"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
