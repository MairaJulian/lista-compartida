import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/Store";
import "./src/i18n";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import i18n from "./src/i18n";
// import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          {/* <Navigation /> */}
          <Text>sssssssssssssssssssssss</Text>
          <Text>{i18n.t("test.language")}</Text>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
