import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import Learn from "../screens/learn/Learn";
import Counter from "../screens/counter/Counter";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Learn: Learn,
    Counter: Counter,
    Login: {
      screen: Login,
    },

    Home: Home,
    Register: Register,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function MainNavigator() {
  return <Navigation />;
}
