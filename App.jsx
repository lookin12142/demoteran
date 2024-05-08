import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens/LoginScreen.jsx';
import { PetsScreen } from './screens/PetsScreen.jsx';
import { RegisterFormScreen } from './screens/RegisterFormScreen.jsx';


const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterFormScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Pets" component={PetsScreen} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
