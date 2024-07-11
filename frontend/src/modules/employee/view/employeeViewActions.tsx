import EmployeeService from 'src/modules/employee/employeeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EMPLOYEE_VIEW';

const employeeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: employeeViewActions.FIND_STARTED,
      });

      const record = await EmployeeService.find(id);

      dispatch({
        type: employeeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: employeeViewActions.FIND_ERROR,
      });

      getHistory().push('/employee');
    }
  },
};

export default employeeViewActions;
