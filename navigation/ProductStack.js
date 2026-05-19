import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductScreen from "../screens/ProductScreen";
import CustomHeader from "../components/CustomHeader";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          header: () => <CustomHeader title="Webshop" />,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          header: () => <CustomHeader title="Product Details" />,
        }}
      />
    </Stack.Navigator>
  );
}
