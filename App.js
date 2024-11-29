import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Toast, {BaseToast} from 'react-native-toast-message';
// import {Provider} from 'react-redux';
// import store from './src/Redux/store';
import {w} from 'walstar-rn-responsive';
import Navigation from './src/Navigations/index';

const App = () => {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{
          pointerEvents: 'none',
          borderLeftWidth: w(2),
          borderRightWidth: w(2),
          borderColor: 'green',
          width: '90%',
        }}
      />
    ),
    error: props => (
      <BaseToast
        {...props}
        style={{
          pointerEvents: 'none',
          borderLeftWidth: w(2),
          borderRightWidth: w(2),
          borderColor: 'red',
          width: '90%',
        }}
      />
    ),
  };

  return (
    // <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
        <Toast config={toastConfig} />
      </NavigationContainer>
    </PaperProvider>
    // </Provider>
  );
};

export default App;
