import { getApi } from 'api';

export async function getStoresService() {
  try {
    const stores = await getApi.get('stores');
    return {
      ok: true,
      stores: stores.data,
    };
  } catch (err) {
    const { error, message } = err.response.data;
    return {
      ok: false,
      error,
      message,
    };
  }
}
