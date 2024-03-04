import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles, { vH } from './assets/styles';

// import screens
import Home from './screens/componenets/Home';
import Favorite from './screens/componenets/Favorite';

// navigation instances
const Stack = createNativeStackNavigator();
let Tab = createBottomTabNavigator();


const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: vH(11),

          backgroundColor: '#fff',
          width: "100%",
          shadowColor: '#dedbdb',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 8,

          elevation: 5,
          //borderWidth : 0
          borderTopWidth: 0,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,

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

                  {/* {
                    !focused
                      ? <Home width={20} height={20} />
                      : <HomeActive width={20} height={20} />
                  } */}

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

                  {/* {
                    !focused
                      ? <Home width={20} height={20} />
                      : <HomeActive width={20} height={20} />
                  } */}

                </View>
                <Text style={[styles.text_tab_bottom, focused ? (styles.text_tab_bottom_active) : ""]} >Favorite</Text>
              </View>)

          },
        }}
      />
      {/* Favorite */}
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
