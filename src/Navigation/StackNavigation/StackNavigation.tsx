import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/authentication/login/LoginScreen";
import SignUpScreen from "../../screens/authentication/signUp/SignUpScreen";
import HomeScreen from "../../screens/home/HomeScreen";
import { Header } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Sign Up"
                    // screenOptions={({route, navigation})=>({
                    //     header: () => {
                    //         return <Header route={route} navigation={navigation}/>
                    //     }
                    // })}
                >
                    <Stack.Screen
                        name="Sign Up"
                        component={SignUpScreen}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />
                    {/* <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default StackNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
  })