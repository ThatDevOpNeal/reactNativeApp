import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
/*
    ScrollView, allows the screen to be scrollable.
    TouchableOpacity are for buttons.
*/

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Component</Text>
      </View>
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
