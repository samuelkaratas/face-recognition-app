import { StatusBar } from "expo-status-bar";
import React from "react";

import { StackNavigator } from "./navigation/navigation";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { imageReducer } from "./store/image-reducer";

const rootReducer = combineReducers({
  image: imageReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
