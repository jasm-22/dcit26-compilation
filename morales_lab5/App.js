import 'react-native-gesture-handler';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screens/Home';
import Profile from './Screens/Profile';
import About from './Screens/About';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MenuButton = ({ navigation }) => (
  <TouchableOpacity
    style={{ marginLeft: 16 }}
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
  >
    <Text style={{ fontSize: 24 }}>☰</Text>
  </TouchableOpacity>
);


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}


function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={({ route }) => ({
            drawerLabel: 'Home',
            swipeEnabled:
              (getFocusedRouteNameFromRoute(route) ?? 'Home') === 'Home',
          })}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{ drawerLabel: 'About' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}