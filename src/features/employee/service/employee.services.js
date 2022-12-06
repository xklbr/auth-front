import { getApi } from 'api';
import { getUserHelper } from 'common/helper';

export async function getEmployeeByIdService({ id }) {
  const { token } = await getUserHelper();
  try {
    const employee = await getApi.get(`user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return employee.data;
  } catch (err) {
    const { error, message } = err.response.data;
    const { status } = err.response;
    return { error, message, status };
  }
}
