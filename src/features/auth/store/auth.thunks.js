import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  authLoginService,
  authRegisterService,
} from '../services/auth.services';
import {
  checkingCredentials,
  login,
  logout,
  register,
  statusRegister,
} from './auth.slice';
import { successToast } from 'common/alert.toast';

export function authRegisterThunk({ email, password, fullName }) {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    dispatch(statusRegister('started'));
    const authRegister = await authRegisterService({
      email,
      password,
      fullName,
    });

    if (!authRegister.ok) return dispatch(statusRegister('unsuccessful'));

    dispatch(statusRegister('successful'));
    dispatch(register(authRegister));
    successToast();
    console.log('THUNK', authRegister);
  };
}

export function authLoginThunk({ email, password }) {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const authLogin = await authLoginService({ email, password });
    if (!authLogin.id) return dispatch(logout(authLogin));

    await AsyncStorage.setItem('USER_AUTH', JSON.stringify(authLogin));
    dispatch(login(authLogin));
    successToast();
  };
}
