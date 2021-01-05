/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './Home';
import BuisnessPage from './BuisnessPage';
import ToDoInfo from './ToDoInfo';
import {NativeRouter, Switch, Route} from 'react-router-native'

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/buisness' component={BuisnessPage} />
          <Route exact path='/todo-info' component={ToDoInfo} />
        </Switch>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  // greet: {
  //   textAlign: 'center',
  //   fontSize: 24,
  //   fontWeight: '800',
  // },
});

export default App;
