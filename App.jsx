import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonTab from './navigation/ButtonTab';
import FilterModal from './modal/FilterModal';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import LocationModal from './modal/LocationModal';
const Stack = createNativeStackNavigator()
export default function App() {
  // const navigation = useNavigation()
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
      name='FilterModal'
      options={({ navigation }) => ({
        presentation: 'modal',
        headerTitle: 'Filter',
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='close-outline' color='#4FAF5A' size={26} />
          </TouchableOpacity>
        ),
      })}
      component={FilterModal}
      />


<Stack.Screen
      name='LocationModal'
      options={({ navigation }) => ({
        presentation: 'modal',
        headerTitle: 'Select Location',
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='close-outline' color='#4FAF5A' size={26} />
          </TouchableOpacity>
        ),
      })}
      component={LocationModal}
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


