import "react-native-gesture-handler";
import { StatusBar,StyleSheet,View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "../hooks/useCachedResources";
import Toast from 'react-native-toast-message';
// tsconfig değişecek alias için bide babella ts config bak