import { i18n } from 'src/i18n';
import EmployeeService from 'src/modules/employee/employeeService';
import listActions from 'src/modules/employee/list/employeeListActions';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EMPLOYEE_DESTROY';

const employeeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: employeeDestroyActions.DESTROY_STARTED,
      });

      await EmployeeService.destroyAll([id]);

      dispatch({
        type: employeeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.employee.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/employee');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: employeeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: employeeDestroyActions.DESTROY_ALL_STARTED,
      });

      await EmployeeService.destroyAll(ids);

      dispatch({
        type: employeeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.employee.destroyAll.success'),
      );

      getHistory().push('/employee');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: employeeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default employeeDestroyActions;
