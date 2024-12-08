import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { yellow_t1,pink } from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const HomePage = () => {
  return (
    <View style={styles.main}>
          <View style={styles.girisButtonContainer}>
        <TouchableOpacity >
          <Text style={styles.girisButtonText}>DreamScape ARventure</Text>
          <Text style={styles.girisButtonText}>Oyuna Başla</Text>

          <LinearGradient
            // Button Linear Gradient
            colors={['#F97794', '#623AA2']}
            style={styles.lineerGradient}>
            <FontAwesome name="long-arrow-right" size={24} color="black" style={styles.inputIcon} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomePage
const styles = StyleSheet.create({
   
    main: {
        flex: 1,
        backgroundColor: pink,
        position: 'relative',
    },
    girisButtonContainer: {
        flexDirection: "row",
        marginTop: 280,
        width: "90%",
        justifyContent: "center",
      },
      girisButtonText: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
      },
      lineerGradient: {
        height: 34,
        width: 56,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
      },
})
