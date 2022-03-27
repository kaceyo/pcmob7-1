import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlogStack from '../components/BlogStack';
import AccountStack from '../components/AccountStack';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from "react-redux"; 

const Tab = createBottomTabNavigator();

export default function LoggedInStack() {
    const isDark = useSelector((state) => state.accountPrefs.isDark); 
   return (
     <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ color, size }) => {
           let iconName;

           if (route.name === 'Task') {
             iconName = "list"
           } else if (route.name === 'Settings') {
             iconName = "cog"
           }
           // You can return any component that you like here!
           return <FontAwesome name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
         tabBarStyle: [
            {
            display: "flex",
            },
            null,
         ],
       })}>
      
         <Tab.Screen name="Task" component={BlogStack} />
         <Tab.Screen name="Settings" component={AccountStack} />
       </Tab.Navigator>
   )
} 