import React from "react";
import ReactDom from "react-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import moviesApp from "./reducers/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

import MainView from "./components/main-view/main-view"; 

import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());
//Main Component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        < MainView />
      </Provider>
    );
  }
}

//Find the root of the app
const container = document.getElementsByClassName('app-container') [0];

//Tells react to render the app in the root DOM element
ReactDom.render(React.createElement(MyFlixApplication), container);  