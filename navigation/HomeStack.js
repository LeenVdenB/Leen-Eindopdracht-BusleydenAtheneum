import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CampusDetailScreen from "../screens/CampusDetailScreen";
import StudiewijzerScreen from "../screens/StudiewijzerScreen";
import CustomHeader from "../components/CustomHeader";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
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
      <Stack.Screen
        name="Studiewijzer"
        component={StudiewijzerScreen}
        options={{
          header: () => <CustomHeader title="Studiewijzer" />,
        }}
      />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{
          header: () => <CustomHeader title="Game" />,
        }}
      />
    </Stack.Navigator>
  );
}
