import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import ProductScreen from "../screens/ProductScreen";
import CustomHeader from "../components/CustomHeader";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#86BC25",
        },
        headerTitleStyle: {
          color: "#000000",
          fontSize: 24,
          fontWeight: "bold",
          fontFamily: "Poppins",
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 10,
          height: 90,
          paddingTop: 16,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "Poppins",
        },
        tabBarActiveTintColor: "#86BC25",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Nieuws"
        component={NewsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Webshop"
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
