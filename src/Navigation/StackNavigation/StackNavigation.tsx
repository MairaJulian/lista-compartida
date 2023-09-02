import { StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/authentication/login/LoginScreen";
import SignUpScreen from "../../screens/authentication/signUp/SignUpScreen";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <View style={styles.container}>
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
        </View>
    )
}

export default StackNavigation

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "red",
        // width: 100,

    }
  })