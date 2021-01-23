import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function OTP(props) {
  const [otp, setOtp] = useState('');

  const onSubmit = () => props.onSubmit(otp);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Enter OTP</Text>
      <TextInput style={styles.input} value={otp} onChangeText={setOtp} />
      <Button title="Confirm OTP" onPress={onSubmit} />
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
