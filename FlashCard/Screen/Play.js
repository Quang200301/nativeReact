import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Alert } from "react-native";
import dataImport from '../data';
export default function Play() {
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);
    const [changeLanguage, setChangeLanguage] = useState('vietnam');



    useEffect(() => {
        if (!data) {
            setData(dataImport)
        }
    }, [])
    const changelanguage = () => {
        if (changeLanguage === 'vietnam') {
            setChangeLanguage('english')
        } else {
            setChangeLanguage('vietnam')
        }
    }
    console.log(changeLanguage)
    const handleNext = () => {
        if (index < data.length - 1) {
            setIndex(index + 1)
        }
    }
    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    };
    const handleReset = () => {
        setIndex(0)
    }
    const handleRemove = (indexToRemove) => {
        console.log("index", index);
        console.log("data follow index ", data[index]);
        if (indexToRemove >= 0 && indexToRemove < data.length) {
            if(data.length> 1){
            data.splice(indexToRemove, 1);
            Alert.alert('sucess delete');
            setData([...data]);
            }
            else{
                Alert.alert('Het chử chỉ còn 1.')
            }
        }

    }
    return (
        <>
            <View style={styles.title}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25 }}>Play...(Card){index + 1}</Text>
            </View>

            <View style={styles.container}>

                <Pressable onPress={() => changelanguage()} style={styles.table} >
                    {
                        data
                            ?
                            <Text style={styles.tag} >{data && data[index][changeLanguage]}</Text>
                            :
                            <Text style={styles.tag} >There is have no Data</Text>
                    }

                </Pressable>

                <View style={styles.control}>
                    <Pressable onPress={() => handlePrevious()}>
                        <Text style={styles.buttonControl}>Previous</Text>
                    </Pressable>
                    <Pressable onPress={() => handleNext()}>
                        <Text style={styles.buttonControl}>Next</Text>
                    </Pressable>

                </View>
                <View style={styles.action}>
                    <Pressable onPress={() => handleRemove(index)}>
                        <Text style={styles.childAction}>Remove From Deck</Text>
                    </Pressable>
                    <Pressable onPress={() => handleReset()}>
                        <Text style={styles.childAction}>Reset Deck</Text>
                    </Pressable>

                </View>

            </View>

            <View style={styles.footer}>
                <Text style={styles.tool} >Play</Text>
                <Text style={styles.tool}>Setting</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    title: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        backgroundColor: 'white'
    },
    table: {
        backgroundColor: '#FE2E54',
        width: '100%',
        height: '60%',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 22,
        marginTop: 10


    },
    container: {

        width: '90%',
        height: '80%',
        borderColor: 'black',
        borderRadius: 22,
        alignSelf: 'center',

    },
    tag: {
        color: 'white',
        fontSize: 40,
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%'
    },
    buttonControl: {
        borderWidth: 1,
        borderColor: '#FE2E54',
        width: 100,
        height: 30,
        display: "flex",
        textAlign: 'center',
        borderRadius: 5,
        color: '#FE2E54'


    },
    action: {
        flexDirection: 'column',
        alignSelf: 'center',
        width: '100%',
        gap: 20,
        marginTop: 30

    },
    childAction: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        color: '#FE2E54',
        textAlign: "center",
        paddingTop: 15,
        fontWeight: 'bold',
        borderRadius: 15,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '10%',
        width: '100%',
        justifyContent: 'space-around',
        paddingTop: 20,


    },
    tool: {
        color: '#FE2E54'
    }

})