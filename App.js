import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from './src/Theme/colors';
import AppContainer from './src/Navigators/Containers/App';
/**
 * The PaperProvider component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level.
 */
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './src/Store';
import {Provider} from 'react-redux';
const App = () => {
  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */
  return (
    <PaperProvider>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            translucent={true}
            backgroundColor={Colors.transparent}
            animated
            barStyle={'default'}
          />
          <AppContainer />
        </SafeAreaView>
      </Provider>
    </PaperProvider>
  );
};

export default App;
