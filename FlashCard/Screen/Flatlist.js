
import React ,{useEffect, useState} from "react";
import { FlatList, SafeAreaView ,Text,View} from "react-native";
export default function Flatlist(){
    const [data,setData]=useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setData(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      const renderItem=({item})=>(
        <View>
            <Text>Id: {item.id}</Text>
            <Text>Title: {item.title}</Text>
        </View>
      )
    return(
        <SafeAreaView>
           <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={(item)=>item.id}
           />
        </SafeAreaView>
    )
}