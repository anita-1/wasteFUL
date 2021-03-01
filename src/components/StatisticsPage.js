import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

export default function StatisticsPage() {
    const [arr, setArr] = useState([])
    const [data, setData] = useState()
    //const [pageState, setPageState] = useState()
 
    //setPageState('new')
    //console.log('\nSTART:\n', count.count)

    useEffect(() => {
        const getNewArray = async () => {
            await AsyncStorage.getItem('arrKey')
            .then(result => {
                //make resultArr using comma as delimiter
                if(result && result.data)
                {
                    const resultArr = result?.split(',')
                    console.log('RESULTARR1', resultArr)
                    setArr(resultArr)
                }else{
                    const resultArr = []
                    console.log('RESULTARR2', resultArr)
                    setArr(resultArr)
                }
                
                const dataElement = Array(1).fill(<DataElement />)
                const newArr = [...arr, ...dataElement]
                console.log('arr',  arr.toString())
                setArr(newArr)
                console.log('newArr', newArr)
                const newArrString = newArr.toString()
                console.log('NEWARRSTRING', newArrString)
                const setArray = async () => {
                    await AsyncStorage.setItem('arrkey', newArrString)
                    // .then(result => setArr())
                    .catch(e => console.log(e))
                }
                setArray()
                }
            ).catch(e => console.log(e))
        }
        getNewArray()
    }, [])


    const DataElement = () => {
        const getCount = async () => {
            await AsyncStorage.getItem('countKey')
            .then(result => {
                setData(result)
                console.log('RESULT', result)
            }).catch(e => console.log(e))
        }

        getCount()

        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
                width: 350,
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
            }}>
                <Text>{data?.data}</Text>
            </View>
        )
    }

    return(
        <View 
            style={{
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 50,
                paddingBottom: 50,
        }}>
            <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>Saved Statistics</Text>
            <View style={styles.barsStyle}>
                <View 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text>Needs to get total waste count from game page. 
                        Add count to array. 
                        Array persists due to user cache.
                        Display each instance of saved total waste count. </Text>
                    {arr}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100,
    },

    barsStyle: {
        borderTopColor: 'blue',
        borderTopWidth: 2,
        width: 350,
        margin: 10,
        paddingTop: 5,
        paddingBottom: 100,
    },
})  