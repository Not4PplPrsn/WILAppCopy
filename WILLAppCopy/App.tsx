import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-navigation';

// navigation component like the burger menu, the bottom tab nav, the images for the tabs and other components
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {  MaterialIcons,  MaterialCommunityIcons,  FontAwesome,  FontAwesome5,  Feather,  Ionicons,  Entypo,  SimpleLineIcons,  AntDesign,  EvilIcons,  Octicons,  Foundation,} from '@expo/vector-icons';
import {NavigationContainer, Route} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider as Provider,   Menu,  Button,  TextInput,  Card,  Title,  Paragraph,  Chip,  SegmentedButtons,  Switch,  RadioButton,  Checkbox,  List,  Divider,  Appbar,  FAB,  Portal,  Modal, TouchableRipple } from 'react-native-paper';


// The main screen on the tabs 
import Home from './Screens/HomePage';
import Courses from './Screens/Course';
import Contacts from './Screens/Contact';
import Calculate from './Screens/Calculate';

// The pages on that will we used in the drawer and drop down menus
//The six month courses
import FirstAid from './Courses/6-month/FirstAid'; 
import LandScaping from './Courses/6-month/LandScaping';
import Sewing from './Courses/6-month/Sewing';
import LifeSkills from './Courses/6-month/LifeSkills';

// The six week course 
import ChildMinding from './Courses/6-weeks/Child-Minding';
import Gardening from './Courses/6-weeks/Gardening';
import Cooking from './Courses/6-weeks/Cooking';

const Tab = createBottomTabNavigator();
const Drawer =  createDrawerNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}
          options={{tabBarIcon:({size,color}) =>
            <Ionicons name='home' size={22} color={'green'}/>
          }}
        />
        <Tab.Screen name='Coureses' component={Courses}
        options={{tabBarIcon:({size,color}) => 
          <Ionicons  name='book' size={22} color={'red'}/>
        }}/>
        <Tab.Screen name='Contacts' component={Contacts}
        options={{tabBarIcon: ({size,color}) => 

          <Ionicons name='call-outline' size={22} color={'blue'}/>
      
      }}
        />
        <Tab.Screen name='Calculate' component={Calculate}
        options={{tabBarIcon: ({size,color}) => 

          <Ionicons name='calculator-outline' size={22} color={'yellow'}/>
      
      }}
        
        
        />
       </Tab.Navigator>
    </NavigationContainer>
  );
}

export function BurgerMenu(){
  return(

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
