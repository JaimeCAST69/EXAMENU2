import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Card, Image, Button } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator}  from "@react-navigation/stack";
import Index from "./screens/index";
import BottomTab from './screens/bottomtab';
import Posts from './screens/posts';
const Stack = createStackNavigator();
export default function App() {
  //jaime castaneda rodriguez
  //Isai acosta guerra
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bottomtab" screenOptions={{ headerShown: false }}>

           <Stack.Screen name="Posts" component={Posts}
           options={{ headerShown: false }} />
           <Stack.Screen name="Bottomtab"
          component={BottomTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

