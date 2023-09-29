import React from "react";
import {Text,StyleSheet, ImageBackground, Pressable,Image, TextInput,View} from "react-native";
import background from '../assets/Login.png';
import google from '../assets/google-removebg-preview.png';
export default function Signin({navigation}){
    return(
        <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}> Log in to Shh</Text>
        <Pressable style={styles.grouplogin}>
            <Image source={google} style={{width:30,height:30}}/>
            <Text style={styles.title1}>Login which Google</Text>
        </Pressable>
        <Text style={styles.title2}>Or log in which Email</Text>
        <View style={styles.groupinput}>
            <Text style={styles.title3}>Username or Email</Text>
            <TextInput 
            style={styles.input}
            />
        </View>
        <View style={styles.inputpass}>
            <Text style={styles.title3}>
                <Text style={styles.password}> Password </Text>
                <Text style={styles.forgot}>Forgot?</Text>
            </Text>
            <TextInput 
                style={styles.input}
            />
        </View>
        <Pressable style={styles.signin}>
            <Text style={styles.signin1}>Sign in</Text>
        </Pressable>
        <View style={styles.loginend}>
            <Text style={styles.account}>Don't have an account?</Text>
            <Pressable onPress={()=>navigation.navigate('signup')}>
                <Text style={styles.signup}>Sign up</Text>
            </Pressable>
        </View>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    title:{
        fontSize:40,
        alignSelf:"center",
        marginTop:70,
        color:'white',
    },
    background:{
        flex:1
    },
    grouplogin:{
        flexDirection:"row",
        backgroundColor:'black',
        height:50,
        gap:20,
        fontSize:20,
        width:'70%',
        borderRadius:25,
        alignSelf:'center',
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
        
    },
    title1:{
        color:'white',
        fontWeight:'bold'
    },
    title2:{
        fontSize:15,
        alignSelf:"center",
        marginTop:20,
        fontWeight:'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:25,
        backgroundColor:'white'
      },
      groupinput:{
        marginTop:150,
      },
      title3:{
        fontSize:15,
        marginLeft:20,
      flexDirection:'row',
      alignItems:'center',
      },
      inputpass:{
        marginTop:20,
      },
      password: {
        fontWeight:'bold',
        marginRight: 10,
    },
    forgot: {
        marginLeft: 10, 
    },
    loginend:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    }
    ,
    account:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
    },
    signup:{
        fontSize:15,
        fontWeight:'bold',
    },
    signin:{
        backgroundColor:'black',
        height:50,
        width:'50%',
        alignSelf:'center',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    signin1:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    }
})