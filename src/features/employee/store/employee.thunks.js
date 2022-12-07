import { Alert } from 'react-native';

import { checkingEmployee, foundEmployee } from './employee.slice';
import { getEmployeeByIdService } from '../service/employee.services';

export function getEmployeeByIdThunk({ id }) {
  return async (dispatch, getState) => {
    dispatch(checkingEmployee());
    const employee = await getEmployeeByIdService({ id });
    dispatch(foundEmployee(employee));
    const { employeeStatus, fullName } = getState().employee;

    if (employee?.error) return Alert.alert(employee.message);
    if (employeeStatus === 'Inactive') return Alert.alert('Inactive employee');
    if (employeeStatus === 'Active')
      return Alert.alert('Active employee', `${fullName}`);
  };
}
