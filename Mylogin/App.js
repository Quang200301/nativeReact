
import Login from './Screen/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Screen/Signup';
import Signin from './Screen/Signin';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup}/>  
      <Stack.Screen name='signin' component={Signin}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

