import { Alert } from 'react-native';

import { checkingEmployee, foundEmployee } from './employee.slice';
import { getEmployeeByIdService } from '../service/employee.services';

export function getEmployeeByIdThunk({ id }) {
  console.log('THUNK_ID:', id);
  return async (dispatch, getState) => {
    dispatch(checkingEmployee());
    const employee = await getEmployeeByIdService({ id });
    console.log('THUNK_EMPLOYEE:', employee);
    dispatch(foundEmployee(employee));
    const { employeeStatus, fullName } = getState().employee;
    console.log('THUNK_EMPLOYEE_STATUS:', employeeStatus);

    if (employee?.error) return Alert.alert(employee.message);
    if (employeeStatus === 'Inactive') return Alert.alert('Inactive employee');
    if (employeeStatus === 'Active')
      return Alert.alert('Active employee', `${fullName}`);
  };
}
