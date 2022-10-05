import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native'
import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
        <Image source={logo} style={{height: 70, resizeMode: "contain"}}/>
        <Text style={{fontWeight: "600", fontSize: 30}}>My-Store</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 200,
        borderBottomColor: "#999",
        borderBottomWidth: 2,
        backgroundColor: "rgba(235, 225, 255, .3)"
    }
})

export default Header
