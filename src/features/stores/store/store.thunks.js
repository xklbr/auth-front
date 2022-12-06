import { errorToast, successToast } from 'common/alert.toast';
import { getStoresService } from '../services';
import {
  checkingStores,
  errorLoadingStores,
  loadedStores,
} from './store.slice';

export function getStoresThunk() {
  return async (dispatch) => {
    dispatch(checkingStores());
    const stores = await getStoresService();
    if (!stores.ok) {
      const { error, message } = stores;
      dispatch(errorLoadingStores());
      return errorToast(error, message);
    }
    dispatch(loadedStores(stores));
  };
}
