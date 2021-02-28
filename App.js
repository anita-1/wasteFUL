import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, ImageBackground } from 'react-native';
import Onboarding from './src/components/OnboardingPage'
import StatisticsPages from './src/components/StatisticsPage';
import MainGamePages from './src/components/MainGamePage';
import TemocPic from './src/assets/temoc.jpg'

console.log('\nnew refresh\n')
//to anyone reading my code. i am so sorry. this App.js needs to be refactored
//to only handle moving between views. 
//needs Navigation 
//needs to set global styles //move styles
//needs eslint and prettier setup

export default function App() {
  const [page, setPage] = useState('onboarding')
  const [code, setCode] = useState()

  const toHome = () => setPage('home')
  const toOnboarding = () => setPage('onboarding')
  const toStatistics = () => setPage('statistics')

  const OnboardingScreens = () => {
    return (
      <View>
        <Onboarding />
        <View 
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            paddingBottom: 50,
        }}>
          <TouchableOpacity style={styles.buttonsStyle} onPress={toHome}>
            <Text style={{fontSize: 20,}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const RegScreens = () => {
    return (
      <View>
        <MainGamePages />
        <View style={{
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
          <TouchableOpacity 
            style={{
              backgroundColor: 'blue',
              width: 250,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center'
          }}
          onPress={toStatistics}>
            <Text style={{ fontSize: 15, color: 'white'}}>Send Statistics and Reset</Text>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity 
            style={{
              backgroundColor: 'black',
              width: 150,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center', 
            }}
            onPress={toOnboarding}>
              <Text style={{ fontSize: 15, color: 'white'}}>Help and Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
        
    )
  }

  const StatisticsScreens = () => {
    return(
      <View>
        <StatisticsPages count='1'></StatisticsPages>
        <View style={{
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
          <TouchableOpacity 
            style={{
              backgroundColor: 'green',
              width: 150,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center', 
            }}
            onPress={toHome}>
            <Text style={{ fontSize: 15, color: 'white'}}>Return to game</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

  useEffect(() => {
    if(page == 'home')
    {
      setCode(<RegScreens />)
    }else if(page == 'onboarding'){
      setCode(<OnboardingScreens />)
    }else if(page == 'statistics'){
      setCode(<StatisticsScreens />)
    }
  }, [page])

  return(
    <ScrollView>
      {code}
    </ScrollView>
  );

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

  bkgndStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "center",
    opacity: 1
},
});
