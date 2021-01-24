import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './screens/PhoneNumber';
import VerifyCode from './screens/VerifyCode';
import Authenticated from './screens/Authenticated';

export default function App() {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAutheticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmOTP(otp) {
    try {
      confirm.confirm(otp);
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAutheticated(true);
    }
  })

  if (authenticated) return <Authenticated />;

  if (confirm) return <VerifyCode onSubmit={confirmOTP} />;

  return <PhoneNumber onSubmit={signIn} />;
}
