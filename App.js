import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import GIFList from './src/containers/home';
import { store } from './src/store/index';

console.disableYellowBox = true;
export default function App() {
  return (
    <ReduxProvider store={store}>
      <GIFList/>
      </ReduxProvider>
  );
}

