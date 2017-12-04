import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarList from './src/overview/listScreen';
export default class App extends React.Component {
  render() {
    return (
        <CarList/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
