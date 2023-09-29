import React, { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, Image, View, TextInput, SafeAreaView, } from "react-native";
import login from '../assets/Login.png';
import images from '../assets/google-removebg-preview.png';
import AsyncStorage from '@react-native-community/async-storage';
export default function Signup({ navigation }) {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [data, setData] = useState(
        {
            name: '',
            username: '',
            email: '',
            password: '',
        }
    );
    const handleCreateAccount = async () => {
        // Kiểm tra xem các trường dữ liệu có được điền đầy đủ không
        if (!name || !email || !password) {
          alert('Please fill in all fields');
          return;
        }
      
        // Lưu thông tin đăng ký vào AsyncStorage
        try {
          await AsyncStorage.setItem('name', name);
          await AsyncStorage.setItem('email', email);
          await AsyncStorage.setItem('password', password);
          alert('Account created successfully');
         
          navigation.navigate('login');
        } catch (error) {
          console.error('Error saving data: ', error);
        }
      };

    const handleChangeText = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };
    return (
        <ImageBackground source={login} style={styles.image}>
            <Text style={styles.title}>Sign up to Shh!</Text>
            <Pressable style={styles.signupgoogle}>
                <Image source={images} style={{ width: 30, height: 30, }}></Image>
                <Text style={styles.title1}>Sign up with Google</Text>
            </Pressable>
            <Text style={styles.title2}>Or continue with Email </Text>
            <View style={styles.inputsignup}>
                <SafeAreaView>
                    <TextInput
                        onChangeText={(e) => setData(e.target.value)}
                        style={styles.input}
                        placeholder="Enter your name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter username"

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"

                    />
                </SafeAreaView>
            </View>

            <View style={{
                flexDirection: 'row',
                marginVertical: 6,
            }} >

                <Text style={styles.label}>I agree with the teams of service and privacy {'\n'} policy</Text>
            </View>
            <View>
                <Pressable style={styles.createaccount} onPress={()=>handleCreateAccount()}>
                    <Text style={styles.title1}>Create Account</Text>

                </Pressable>
            </View>
            <View style={styles.group}>
                <Text style={styles.test2}>Aready have an account?</Text>
                <Pressable onPress={() => navigation.navigate('signin')}><Text style={styles.login1}>Login</Text></Pressable>
            </View>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    image: {
        flex: 1
    },
    title: {
        fontSize: 30,
        color: 'white',
        alignSelf: "center",
        marginTop: 90,


    },
    title1: {
        color: 'white'
    },
    signupgoogle: {
        flexDirection: "row",
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        height: 50,
        width: '75%',
        textAlign: "center",
        alignSelf: "center",
        padding: 10,
        borderRadius: 25,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    title2: {
        fontSize: 20,
        marginTop: 20,
        alignSelf: "center",
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25,
    },
    inputsignup: {
        paddingTop: 30
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
        color: 'white',
        marginLeft: 20,
    },
    createaccount: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        height: 50,
        width: '50%',
        textAlign: "center",
        alignSelf: "center",
        padding: 10,
        borderRadius: 25,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    group: {
        justifyContent: 'center',
        paddingTop: '2%',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',

    },
    test2: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
    },
    login1: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})