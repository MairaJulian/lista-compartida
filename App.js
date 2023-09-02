
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <Navigator/>
      </Provider>
    </SafeAreaProvider>
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
