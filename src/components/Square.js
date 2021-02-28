import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import TemocPic from '../assets/temoc.jpg'

export default function Square() {
    return (
        <View style={styles.square}>
        <ImageBackground style={styles.bkgndStyle} source={TemocPic}></ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        margin: 5,
    },
    
    bkgndStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: "center",
        opacity: 1
    },
})
