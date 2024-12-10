import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, Image} from 'react-native';
import {m} from 'walstar-rn-responsive';
import Profile from '../Screens/Profile';
import {globalColors} from '../Assets/themes/globalColors';
import TermsAndConditions from '../Screens/TermsAndConditions';
import MatchScreen from '../Screens/MatchScreen'; // Add MatchScreen if it's part of the Drawer Navigator

const Drawer = createDrawerNavigator();

const commonScreenOptions = {
  headerTintColor: globalColors.LightPink,
  headerStyle: {
    backgroundColor: '#3660f9',
  },
  headerTitleStyle: {
    fontFamily: 'Inter',
    fontSize: m(16),
  },
};

function DrawerNavigation({navigation, state}) {
  return (
    <Drawer.Navigator initialRouteName="profile">
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          ...commonScreenOptions,
          headerTitle: '',
          headerShown: true,
          drawerLabel: 'Edit Profile',
        }}
      />
      <Drawer.Screen
        name="terms&conditions"
        component={TermsAndConditions}
        options={{
          ...commonScreenOptions,
          drawerLabel: 'Send Feedback',
        }}
      />
      {/* Add MatchScreen to the Drawer Navigator */}
      <Drawer.Screen
        name="match"
        component={MatchScreen} // This ensures MatchScreen can access openDrawer()
        options={{
          ...commonScreenOptions,
          drawerLabel: 'Match',
        }}
      />
      <Drawer.Screen name="match" component={MatchScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;

const styles = StyleSheet.create({
  dashboardLogo: {
    marginRight: m(20),
    height: m(27),
    width: m(80),
  },
  defaultLogo: {
    width: m(50),
    height: m(50),
    marginRight: m(10),
  },
});
