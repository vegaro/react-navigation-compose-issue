/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  View,
  Button,
  requireNativeComponent,
} from 'react-native';

const BrokenView = requireNativeComponent('Broken');

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Broken Screen" onPress={() => navigation.navigate('Broken')} />
    </View>
  );
}

function BrokenScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BrokenView style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
      <Button title="Go to Home Screen" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Broken: BrokenScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}