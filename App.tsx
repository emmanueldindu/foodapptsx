import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonTab from './navigation/ButtonTab';
import Filter from './(modal)/Filter';
const Stack = createNativeStackNavigator()

export default function App() {
  return (

   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name='Bottom Navigation'
      component={ButtonTab}
      options={{headerShown: false}}
      >

      </Stack.Screen>
      <Stack.Screen
      name='filter'
      component={Filter}
      />

  

    </Stack.Navigator>

   </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


