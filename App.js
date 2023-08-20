import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Store/Store';
import './src/i18n';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Holaaaa Maiiii</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
