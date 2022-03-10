import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Dashboard from './Dashboard';

const Drawer = createDrawerNavigator();

function Tab2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
export default Home = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}
      shifting={true}
      activeColor="#2563eb"
      inactiveColor="#A5A7AC">
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <Icon name="rocket" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <Icon name="gears" color={color} size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});
