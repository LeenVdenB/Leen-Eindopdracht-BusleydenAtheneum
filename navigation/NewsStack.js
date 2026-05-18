import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsScreen from "../screens/NewsScreen";
import CustomHeader from "../components/CustomHeader";
import NewsDetailScreen from "../screens/NewsDetailScreen";

const Stack = createNativeStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{
          header: () => <CustomHeader title="News Details" />,
        }}
      />
    </Stack.Navigator>
  );
}
