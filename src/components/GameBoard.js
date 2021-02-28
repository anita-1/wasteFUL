import React, { Component, useState, useEffect } from 'react'
import { render } from 'react-dom'
import { StyleSheet, Button, Text, View, TouchableOpacity, TextComponent } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Square from './Square'


export default function GameBoard() {
    const [arr, setArr] = useState([])
    const [count, setCount] = useState(0)
    const [wasteCount, setWasteCount] = useState(0)

    useEffect(() => {
        setArr([])
        setCount(0)
    }, [])
    
    useEffect(() => {
        setArr(Array(count).fill(<HereSquare />))
    }, [count])

    const HereSquare = () => {
        return (
            <View>
                <Square></Square>
            </View>
        )
    }

    const addCount = () => {
        setCount(count + 2)
        setWasteCount(wasteCount + 1)
    }
    
    const subCount = () => {
        if(count > 0)
        {
            setCount(count - 1)
        }
    }
    return (
        <ScrollView>
            <View style={styles.viewStyle}>
                <TouchableOpacity style={styles.buttonsStyle} onPress={subCount}>
                    <Text style={styles.textStyle}>I recycled!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsStyle} onPress={addCount}>
                    <Text style={styles.textStyle}>Generate Waste</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15,}}>{"\n"}Total Waste Generated: {wasteCount}</Text>
            </View>
            <View style={styles.squaresStyle}>
                <Text></Text>
                {arr}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },

    viewStyle: {
        alignItems: 'center',
    },

    buttonsStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        marginTop: 10,
        width: 250,
        height: 35,
    },

    squaresStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 10,
        padding: 10,
    }
  });
