import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Tabs from './src/routes/Tabs';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#370f53" />
      <Tabs/>
    </>
  );
}
