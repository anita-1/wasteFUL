import { StyleSheet, View, Text } from 'react-native';
import GameBoard from './GameBoard';
import React from 'react'

export default function MainGamePages() {
    return(
        <View style={styles.containerStyle}>
            <Text>I'm not calling Temoc trash but . . .</Text>
            <Text></Text>
            <View style={styles.barsStyle}>
                <GameBoard></GameBoard>
            </View>
            <Text></Text>
            <Text>. . . Enarc is superior.</Text>
            <Text>{"\n\n\n\n"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 250,
    },
  
    barsStyle: {
      borderTopColor: 'green',
      borderTopWidth: 5,
      borderBottomColor: 'green',
      borderBottomWidth: 5,
    },
  
    buttonsStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      marginTop: 10,
      width: 250,
      height: 35,
    },
});
