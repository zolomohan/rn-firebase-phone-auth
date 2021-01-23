import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './screens/PhoneNumber';
import OTPScreen from './screens/OTP';
import Authorized from './screens/Authorized';

export default function App() {
  const [confirm, setConfirm] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmOTP(otp) {
    try {
      await confirm.confirm(otp);
      setAuthorized(true);
    } catch (error) {
      alert('Invalid code');
    }
  }

  if (authorized) return <Authorized />;

  if (confirm) return <OTPScreen onSubmit={confirmOTP} />;

  return <PhoneNumber onSubmit={signInWithPhoneNumber} />;
}
