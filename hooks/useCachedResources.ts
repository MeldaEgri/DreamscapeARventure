import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react';

export default function useCachedResources() {
    // -- useState,useEffect --//

    const [isLoadingComplete, setLoadingComplete] = useState(false)

    //Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                //Prevents splash from automatically closing
                SplashScreen.preventAutoHideAsync();
                // Load Fonts Async
                await Font.loadAsync({
                    'ptsans-bold': require('../assets/fonts/PTSans-Bold.ttf'),
                    'roboto': require('../assets/fonts/RobotoCondensed-VariableFont_wght.ttf')
                })
            } catch (error) {
                console.warn(error)
            }
            finally {
                setLoadingComplete(true),
                    //Splash screen closing
                    SplashScreen.hideAsync();
            }
        }
        loadResourcesAndDataAsync();
    }, []);
    return isLoadingComplete;

}
