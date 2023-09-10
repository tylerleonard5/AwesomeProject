import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import SavedScreen from './screens/SavedScreen';
import UpdateScreen from './screens/UpdateScreen';
import SearchScreen from './screens/SearchScreen';

//Screen names
const savedName = "Saved";
const updateName = "Update";
const searchName = "Search";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={savedName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === savedName) {
              iconName = focused ? 'folder' : 'folder-outline';

            } else if (rn === updateName) {
              iconName = focused ? 'flag' : 'flag-outline';

            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 0, fontSize: 10 },
          iconStyle: { marginTop: 5},
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={savedName} component={SavedScreen} />
        <Tab.Screen name={updateName} component={UpdateScreen} options={{ headerShadowVisible: false }}/>
        <Tab.Screen name={searchName} component={SearchScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;