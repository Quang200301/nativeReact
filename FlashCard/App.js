import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Play from './Screen/Play';
import Setting from './Screen/Setting';
export default function App() {
  const Stack =  createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='play' component={Play}/>
        <Stack.Screen name='setting' component={Setting}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


