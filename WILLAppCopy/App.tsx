import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider, List, Divider } from 'react-native-paper';

// ===== IMPORT YOUR EXTERNAL SCREENS =====
// The main screen on the tabs 
import Home from './Screens/HomePage';
import Courses from './Screens/Course';
import Contacts from './Screens/Contact';
import Calculate from './Screens/Calculate';

// The six month courses
import FirstAid from './Courses/6-month/FirstAid'; 
import LandScaping from './Courses/6-month/LandScaping';
import Sewing from './Courses/6-month/Sewing';
import LifeSkills from './Courses/6-month/LifeSkills';

// The six week courses 
import ChildMinding from './Courses/6-weeks/Child-Minding';
import Gardening from './Courses/6-weeks/Gardening';
import Cooking from './Courses/6-weeks/Cooking';

// The other aspects of the burger menu
import Basket from './BurgerExtras/Basket';
import BookMarks from './BurgerExtras/BookMark';

// ===== FALLBACK COMPONENTS =====
// If any import fails, these will be used as fallbacks
function FallbackScreen({ screenName }: { screenName: string }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{screenName}</Text>
      <Text>Screen is loading...</Text>
    </View>
  );
}

// Create safe components that won't crash if imports fail
const HomeScreen = Home || (() => <FallbackScreen screenName="Home" />);
const CoursesScreen = Courses || (() => <FallbackScreen screenName="Courses" />);
const ContactsScreen = Contacts || (() => <FallbackScreen screenName="Contacts" />);
const CalculateScreen = Calculate || (() => <FallbackScreen screenName="Calculate" />);

const FirstAidScreen = FirstAid || (() => <FallbackScreen screenName="First Aid" />);
const LandScapingScreen = LandScaping || (() => <FallbackScreen screenName="Landscaping" />);
const SewingScreen = Sewing || (() => <FallbackScreen screenName="Sewing" />);
const LifeSkillsScreen = LifeSkills || (() => <FallbackScreen screenName="Life Skills" />);

const ChildMindingScreen = ChildMinding || (() => <FallbackScreen screenName="Child Minding" />);
const GardeningScreen = Gardening || (() => <FallbackScreen screenName="Gardening" />);
const CookingScreen = Cooking || (() => <FallbackScreen screenName="Cooking" />);

const BasketScreen = Basket || (() => <FallbackScreen screenName="Basket" />);
const BookMarksScreen = BookMarks || (() => <FallbackScreen screenName="Bookmarks" />);

// ===== TYPE DEFINITIONS =====
export type TabParamList = {
  Home: undefined;
  Courses: undefined;
  Contacts: undefined;
  Calculate: undefined;
};

export type DrawerParamList = {
  NavBar: undefined;
  BookMarks: undefined;
  Basket: undefined;
  ChildMinding: undefined;
  Gardening: undefined;
  Cooking: undefined;
  Sewing: undefined;
  LifeSkills: undefined;
  LandScaping: undefined;
  FirstAid: undefined;
};

// ===== NAVIGATORS =====
const Tab = createBottomTabNavigator<TabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

// ===== DATA CONFIGURATION =====
const ListOfPages = [
  { page: 1, name: 'Basket' as const, component: BasketScreen, icon: 'basket', label: 'Basket' },
  { page: 2, name: 'BookMarks' as const, component: BookMarksScreen, icon: 'bookmark', label: 'BookMarks' }
];

const SixWeeksCourses = [
  { page: 1, name: 'ChildMinding' as const, component: ChildMindingScreen, icon: 'baby-face-outline', label: 'Child Minding' },
  { page: 2, name: 'Gardening' as const, component: GardeningScreen, icon: 'shovel', label: 'Gardening' },
  { page: 3, name: 'Cooking' as const, component: CookingScreen, icon: 'chef-hat', label: 'Cooking' },
];

const SixMonthCourses = [
  { page: 1, name: 'LifeSkills' as const, component: LifeSkillsScreen, icon: 'heart', label: 'Life Skills' },
  { page: 2, name: 'FirstAid' as const, component: FirstAidScreen, icon: 'medical-bag', label: 'First Aid' },
  { page: 3, name: 'LandScaping' as const, component: LandScapingScreen, icon: 'flower', label: 'Landscaping' },
  { page: 4, name: 'Sewing' as const, component: SewingScreen, icon: 'needle', label: 'Sewing' },
];

// ===== TAB NAVIGATOR =====
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#e4715cff',
        tabBarInactiveTintColor: '#494545ff',
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name='Courses' 
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='book' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name='Contacts' 
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='call-outline' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name='Calculate' 
        component={CalculateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calculator-outline' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

// ===== DRAWER CONTENT =====
function BurgerMenu(props: DrawerContentComponentProps) {
  const [expandedWeek, setExpandedWeek] = useState(false);
  const [expandedMonth, setExpandedMonth] = useState(false);

  const handleNavigation = (screenName: keyof DrawerParamList) => {
    props.navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>My Learning App</Text>
      </View>
      
      <List.Section>
        <List.Item
          title="Main"
          onPress={() => handleNavigation('NavBar')}
          left={props => <List.Icon {...props} icon="home" />}
        />
        
        <List.Accordion
          title="Six Week Courses"
          expanded={expandedWeek}
          onPress={() => setExpandedWeek(!expandedWeek)}
          left={props => <List.Icon {...props} icon="calendar-week" />}
        >
          {SixWeeksCourses.map((page) => (
            <List.Item
              key={page.name}
              title={page.label}
              onPress={() => handleNavigation(page.name)}
              left={props => <List.Icon {...props} icon={page.icon} />}
            />
          ))}
        </List.Accordion>

        <List.Accordion
          title="Six Month Courses"
          expanded={expandedMonth}
          onPress={() => setExpandedMonth(!expandedMonth)}
          left={props => <List.Icon {...props} icon="calendar-month" />}
        >
          {SixMonthCourses.map((page) => (
            <List.Item
              key={page.name}
              title={page.label}
              onPress={() => handleNavigation(page.name)}
              left={props => <List.Icon {...props} icon={page.icon} />}
            />
          ))}
        </List.Accordion>

        <Divider />

        {ListOfPages.map((page) => (
          <List.Item
            key={page.name}
            title={page.label}
            onPress={() => handleNavigation(page.name)}
            left={props => <List.Icon {...props} icon={page.icon} />}
          />
        ))}
      </List.Section>
    </DrawerContentScrollView>
  );
}

// ===== MAIN APP COMPONENT =====
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Drawer.Navigator 
          drawerContent={(props) => <BurgerMenu {...props} />}
          screenOptions={{
            headerShown: true,
          }}
        >
          <Drawer.Screen 
            name="NavBar" 
            component={TabNavigator}
            options={{ 
              title: 'Main',
              headerShown: false
            }}
          />
          
          {/* Drawer Screens for Six Week Courses */}
          {SixWeeksCourses.map((course) => (
            <Drawer.Screen
              key={course.name}
              name={course.name}
              component={course.component}
              options={{ title: course.label }}
            />
          ))}
          
          {/* Drawer Screens for Six Month Courses */}
          {SixMonthCourses.map((course) => (
            <Drawer.Screen
              key={course.name}
              name={course.name}
              component={course.component}
              options={{ title: course.label }}
            />
          ))}
          
          {/* Other Drawer Screens */}
          {ListOfPages.map((page) => (
            <Drawer.Screen
              key={page.name}
              name={page.name}
              component={page.component}
              options={{ title: page.label }}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// ===== STYLES =====
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerHeader: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});