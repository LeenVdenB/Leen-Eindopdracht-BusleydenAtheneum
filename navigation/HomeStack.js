import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CampusDetailScreen from "../screens/CampusDetailScreen";
import CustomHeader from "../components/CustomHeader";

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
    </Stack.Navigator>
  );
}
