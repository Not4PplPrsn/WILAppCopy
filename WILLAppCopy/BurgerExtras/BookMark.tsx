import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList,  } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import React from 'react';

// navigation component like the burger menu, the bottom tab nav, the images for the tabs and other components
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {  MaterialIcons,  MaterialCommunityIcons,  FontAwesome,  FontAwesome5,  Feather,  Ionicons,  Entypo,  SimpleLineIcons,  AntDesign,  EvilIcons,  Octicons,  Foundation,} from '@expo/vector-icons';
import {NavigationContainer, Route, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider as Provider,   Menu,  Button,  TextInput,  Card,  Title,  Paragraph,  Chip,  SegmentedButtons,  Switch,  RadioButton,  Checkbox,  List,  Divider,  Appbar,  FAB,  Portal,  Modal, TouchableRipple } from 'react-native-paper';
import Component from 'react-native-paper/lib/typescript/components/List/ListItem';


export default function BookMarks(){
    return(
        <View>
            <Text> Welcome</Text>
           <StatusBar style="auto" />
        </View>
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
