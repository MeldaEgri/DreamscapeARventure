import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import "react-native-gesture-handler";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';  // <-- NavigationContainer import edilmelidir

// SCREENS //
import Slider from "@/screens/Auth/Slider";

// Stack navigator'ı burada tanımlıyoruz
const Stack = createNativeStackNavigator();  

// App component'i
export default function App() {
  const isLoadingComplete = useCachedResources();  
  if (!isLoadingComplete) {
    return <View />;
  } else {
    return ( 
      <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}
  initialRouteName='Slider'
  >
    {/* <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    <Stack.Screen name="SignUp" component={SignupScreen}></Stack.Screen>
    <Stack.Screen name="Homepage" component={HomepageScreen}></Stack.Screen> */}
  </Stack.Navigator>
  
      </NavigationContainer>
    );
  }
}

// Stack Navigator component'i
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Slider" component={Slider} />
    </Stack.Navigator>
  );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
