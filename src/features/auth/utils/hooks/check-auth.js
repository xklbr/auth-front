import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { login, logout } from '../../store/auth.slice';

export function useCheckAuth() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      async function onAuthStateChanged() {
        const isUserAuth = await AsyncStorage.getItem('USER_AUTH');
        if (!isUserAuth) return dispatch(logout());

        const { id, email, fullName } = isUserAuth;
        dispatch(login({ id, email, fullName }));
      }
      onAuthStateChanged();
    } catch (error) {
      AsyncStorage.removeItem('USER_AUTH');
    }
  }, []);

  return status;
}
