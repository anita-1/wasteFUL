import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StatisticsPage(count) {
    const [arr, setArr] = useState([])
    const [data, setData] = useState(0)


    //console.log('\nSTART:\n', count.count)

    useEffect(() => {

        // const getNewArray = async () => {
        //     await AsyncStorage.getItem('arrKey').then(result => {
        //         //make resultArr using comma as delimiter
        //         const resultArr = result.split(',')
        //         console.log('RESULTARR', resultArr)
        //     }).then(result => {
        //         console.log("DATA BEFORE SET", data)
        //         setData(count.count)
        //         console.log('DATA AFTER SET', data)
        //         const newArr = [...arr, data]
        //         console.log('NEWARR', newArr)
        //         const newArrString = newArr.toString()
        //         const storeArray = async () => {
        //             await AsyncStorage.setItem('arrKey', newArrString)
        //             .catch(e => console.log(e))
        //             console.log('NEWARRSTRING', newArrString)
        //         }
        //     }).catch(e => console.log(e))
        // }
        // getNewArray()
        
        setArr(<DataElement/>)
    }, [])

    useEffect(() => {

    }, [])

    

    const DataElement = () => {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
                width: 200,
                height: 50,
                borderColor: 'black',
                borderWidth: 2,
            }}>
                <Text>{data}</Text>
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
        }}>
            <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>Saved Statistics</Text>
            <View style={styles.barsStyle}>
                <View 
                    style={{
                        alignItems: 'flex-start',
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