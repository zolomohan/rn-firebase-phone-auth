import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Authorized() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>You're Logged in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
});
