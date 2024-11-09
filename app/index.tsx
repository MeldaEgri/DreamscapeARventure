import "react-native-gesture-handler";
import { StatusBar, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "../hooks/useCachedResources";
import Toast from 'react-native-toast-message';

// SCREENS //
import Slider from "@/screens/Auth/Slider";



export default function Pages() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return <View />
    } else {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <SafeAreaProvider>
                    <NativeBaseProvider>
                        <Navigation />
                    </NativeBaseProvider>
                    <Toast/>
                </SafeAreaProvider>
            </View>
        )

    }
}

const Stack = createNativeStackNavigator();
const Navigation: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Slider" component={Slider} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})