import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import Learn from "../screens/learn/Learn";
import Counter from "../screens/counter/Counter";
import Signin from "../screens/signin/Signin";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Signin",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Signin: Signin,
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
