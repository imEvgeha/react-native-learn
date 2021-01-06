import React from 'react';
import { View } from 'react-native';
import Home from './Home';
import BuisnessPage from './BuisnessPage';
import ToDoInfo from './ToDoInfo';
import {NativeRouter, Switch, Route} from 'react-router-native'

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

export default App;
