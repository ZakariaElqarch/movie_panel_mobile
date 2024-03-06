import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles, { vH } from './assets/styles';

// import svgs
import HomeActiveIcon from "./assets/icons/home_active_icon.svg";
import HomeIcon from "./assets/icons/home_icon.svg";
import FavoriteActiveIcon from "./assets/icons/favorite_active_icon.svg";
import FavoriteIcon from "./assets/icons/favorite_icon.svg";
import MoviesIcon from "./assets/icons/movies_icon.svg";
import MoviesActiveIcon from "./assets/icons/movies_active_icon.svg";
import ProfileIcon from "./assets/icons/profile_icon.svg";
import ProfileActiveIcon from "./assets/icons/profile_active_icon.svg";
// import screens
import Home from './screens/Home';
import Favorite from './screens/Favorite';
import Movies from './screens/Movies';
import Profile from './screens/Profile';
// navigation instances
const Stack = createNativeStackNavigator();
let Tab = createBottomTabNavigator();


const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: vH(11),

          backgroundColor: '#252C3E',
          width: "100%",
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,

          elevation: 5,
          //borderWidth : 0
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,

        },
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{

          tabBarLabel: 'Home',
          showLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ marginLeft: 20 }}>
                <View style={[styles.icon_bottom_nav, focused ? (styles.active_nav) : ""]} >

                  {
                    !focused
                      ? <HomeIcon  width={20} height={20} />
                      : <HomeActiveIcon width={20} height={20} />
                  }

                </View>
                <Text style={[styles.text_tab_bottom, focused ? (styles.text_tab_bottom_active) : ""]} >Home</Text>
              </View>)

          },
        }}
      />
       <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{

          tabBarLabel: 'Favorite',
          showLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ marginLeft: 20 }}>
                <View style={[styles.icon_bottom_nav, focused ? (styles.active_nav) : ""]} >

                  {
                    !focused
                    

                      ? <FavoriteIcon width={20} height={20} />
                      : <FavoriteActiveIcon width={20} height={20} />
                  }

                </View>
                <Text style={[styles.text_tab_bottom, focused ? (styles.text_tab_bottom_active) : ""]} >Favorite</Text>
              </View>)

          },
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{

          tabBarLabel: 'Movies',
          showLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ marginLeft: 20 }}>
                <View style={[styles.icon_bottom_nav, focused ? (styles.active_nav) : ""]} >

                  {
                    !focused
                    

                      ? <MoviesIcon width={20} height={20} />
                      : <MoviesActiveIcon width={20} height={20} />
                  }

                </View>
                <Text style={[styles.text_tab_bottom, focused ? (styles.text_tab_bottom_active) : ""]} >Movies</Text>
              </View>)

          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{

          tabBarLabel: 'Profile',
          showLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ marginLeft: 20 }}>
                <View style={[styles.icon_bottom_nav, focused ? (styles.active_nav) : ""]} >

                  {
                    !focused
                    

                      ? <ProfileIcon width={20} height={20} />
                      : <ProfileActiveIcon width={20} height={20} />
                  }

                </View>
                <Text style={[styles.text_tab_bottom, focused ? (styles.text_tab_bottom_active) : ""]} >Profile</Text>
              </View>)

          },
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TabsNavigator */}
        <Stack.Screen name="inner" component={TabsNavigator} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
