import React from "react";
import {View,Text, Pressable, SafeAreaView} from "react-native";
export default function Setting({navigation}){
    return(
       
        <View>
            <Pressable onPress={()=>navigation.navigate('flatlist')}>
                 <Text style={{fontSize:40,alignSelf:"center"}}>Setting page</Text>
            </Pressable>
            
        </View>
        
       
    )
}