import React, { Component } from 'react';
import { NavigatorIOS, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import SearchView from './components/SearchView';
import searchReducer from './redux/search';

const reducer = combineReducers({ searchReducer });
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          initialRoute={{
            component: SearchView,
            title: 'Search'
          }}
          style={{flex: 1}}
        />
      </Provider>
    );
  }
}
