import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { persistor, store } from "./app/store";
import Nav from "./src/nav/Nav";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Nav />
          <StatusBar style="auto" />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
