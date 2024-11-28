import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import CameraScreen from '../Screens/CameraScreen';
import CameraResult from '../Screens/CameraResult';
import NoMatchScreen from '../Screens/NoMatchScreen';
import MatchScreen from '../Screens/MatchScreen';
import MatchRejectedScreen from '../Screens/MatchRejectedScreen';

const Stack = createNativeStackNavigator();

const stackArray = [
  {
    name: 'cameraScreen',
    component: props => (
      // <ComponentWrapper>
      <CameraScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'cameraResult',
    component: props => (
      // <ComponentWrapper>
      <CameraResult {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'noMatch',
    component: props => (
      // <ComponentWrapper>
      <NoMatchScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'match',
    component: props => (
      // <ComponentWrapper>
      <MatchScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'matchRejectedScreen',
    component: props => (
      // <ComponentWrapper>
      <MatchRejectedScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
];

export const PublicRoute = props => {
  const customHeaderStyle = {
    backgroundColor: 'blue',
    shadowOpacity: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: 'transparent',
  };
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      initialRouteName="cameraScreen">
      {stackArray.map((item, index) => {
        const isHeader = true;
        return (
          <Stack.Screen
            style={styles.header}
            key={index}
            name={item.name}
            options={optionProps => {
              const {navigation} = optionProps;
              return {
                headerShown: false,
                headerTintColor: 'yellow',
                headerBackTitle: '',
                headerBackTitleVisible: false,
                headerStyle: customHeaderStyle,
                headerLeftContainerStyle: {
                  marginLeft: 12,
                },

                headerLeft: props => {
                  return (
                    <TouchableOpacity
                      style={styles.backBtnStyle}
                      onPress={() => navigation.goBack()}>
                      <Text>Header</Text>
                    </TouchableOpacity>
                  );
                },
              };
            }}>
            {p => <item.component {...p} {...props} />}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#287ced',
  },
  backBtnStyle: {
    backgroundColor: 'red',
  },
});
