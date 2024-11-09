import React, { useState } from 'react'
import { Spinner } from "native-base";
import { StyleSheet, View, Image } from "react-native";
import { pink, white } from '@/constants/Colors';
import Layouts from '@/constants/Layouts';
const Slider: React.FC = () => {

    // -- USE STATE  -- //
    const [loading, setLoading] = useState(true)

    if (loading) {
        <View style={styles.sliderView}>
            <Spinner size={22} color={pink} />
        </View>
    }

    return (

        <View style={styles.main}>
<Image
source={require('../../assets/images/screens/backgraunimg.png')}
style={styles.sliderBack}
/>





        </View>

    )
}

export default Slider

const styles = StyleSheet.create({
    sliderView: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        flex: 1,
        backgroundColor: white
    },
    sliderBack:{
        height:400,
        width:Layouts.window.width
    }
})