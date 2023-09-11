import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/redux/store.js';
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";              //3rd party for navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "./src/screens/Series.js";
import FlagMySpot from './src/screens/FlagMySpot.js';
import General from "./src/screens/General.js";

const Stack = createNativeStackNavigator();                         //initialize stack

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="black" translucent={true} />
        <Stack.Navigator initialRouteName="chat" screenOptions={{ headerShown: false }}  >
          <Stack.Screen name="chat" component={Chat} />
          <Stack.Screen name="flagMySpot" component={FlagMySpot} />
          <Stack.Screen name="general" component={General} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00b4d8",
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // "justify-content": "space-between",
    // flexDirection: 'column',
    // justifyContent: 'center',

    // flexWrap: 'wrap',
  },
});
