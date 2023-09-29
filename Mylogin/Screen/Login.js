import React from "react";
import {  ImageBackground, StyleSheet,View,Text, Pressable, } from "react-native";
import login from '../assets/Login.png'
export default function Login({navigation}) {
    return (
        <ImageBackground source={login} style={styles.container}>
          
           <Text style={styles.title}>Well Come To {'\n'}Shh </Text>
            <Text style={styles.title1}>A hup where whispers Echo {'\n'}Loundest</Text>
            <View style={styles.btsignup}>
                <Pressable style={styles.spbutton} onPress={()=>navigation.navigate('signup')}>
                <Text style={styles.sptext}>Sign Up</Text>
                </Pressable>
                <View style={styles.group}>
                    <Text style={styles.test2}>Aready have an account?</Text>
                    <Pressable style={styles.lgbutton}><Text>Login</Text></Pressable>
                </View>
            </View>
           
                
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
    },
    title:{
        color:'white',
        fontSize:40,
        marginTop:20,
        marginLeft:20,
    },
    title1:{
        fontSize:20,
        marginTop:20,
        marginLeft:20,
    },
    group:{
        flexDirection:"row",
        justifyContent:'center',
        paddingTop:'5%',
        textAlign:'center'
    },
    sptext:{
       marginTop:'80%',
       height:50,
        textAlign:'center',
        backgroundColor:'black',
        color:'white',
        justifyContent:'center',
        width:'65%',
        alignSelf:'center',
        borderRadius:10,
        padding:10
    },
    test2:{
        color:'white'
    }
   
})