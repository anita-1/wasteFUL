import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image, Button, TouchableOpacity } from 'react-native';

export default function onboarding() {
    console.log('in onboardingscreens')
    
    return(
      <View style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'green',
          fontWeight: 'bold',
          }}>
            Welcome to wasteFUL!
        </Text>
        <View style={{
          borderWidth: 1,
          borderTopColor: 'green',
          width: 350,
          margin: 10,
        }}></View>
        
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
        }}>
          wasteFUL is an app to track how much waste you are generating!
          {"\n\n\n"}
          Press the "Generate Waste" button every time you take out the trash: this will generate 2 Temoc heads on the screen 
          {"\n"}
          Press the "I recycled" button every time you recycle: this will remove 1 Temoc head
          {"\n\n"}
          This is because recycling is not as good as reducing the amount of waste a person generates. 
          {"\n"}
          Reduce, Reuse, Recycling. 
          {"\n"}
          Notice recycling is the last resort.
          {"\n\n"}
          There is also a total waste generated display no matter how much you recycle. Because we all generate waste.
          {"\n\n"}
        </Text>
        <Text style={{
          textAlign: 'center',
          fontSize: 15,
        }}>
        P.S. You can come back to this page if you hit the "Help and Reset" button.
        </Text>
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