import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/home/homeScreen/HomeScreen";
import LoginScreen from "../../Screens/authentication/login/loginScreen/LoginScreen";
import SignUpScreen from "../../Screens/authentication/signUp/signUpScreen/SignUpScreen";

const Stack = createNativeStackNavigator()

const stackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name=""
                component={LoginScreen}
            />
            <Stack.Screen
                name=""
                component={SignUpScreen}
            />
            <Stack.Screen
                name=""
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}