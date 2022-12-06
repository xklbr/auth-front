import { getApi } from 'api';

export async function authRegisterService(payload) {
  try {
    const authRegister = await getApi.post('auth/register', payload);
    return {
      ok: true,
      ...authRegister.data,
    };
  } catch (err) {
    const { error, message } = err.response.data;
    const { status } = err.response;
    return { error, message, status, ok: false };
  }
}

export async function authLoginService({ email, password }) {
  try {
    const authLogin = await getApi.post('auth/login', { email, password });
    return {
      ok: true,
      ...authLogin.data,
    };
  } catch (err) {
    const { error, message } = err.response.data;
    const { status } = err.response;
    return { error, message, status, ok: false };
  }
}
