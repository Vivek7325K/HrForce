import { i18n } from 'src/i18n';
import EmployeeService from 'src/modules/employee/employeeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EMPLOYEE_FORM';

const employeeFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: employeeFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EmployeeService.find(id);
      }

      dispatch({
        type: employeeFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: employeeFormActions.INIT_ERROR,
      });

      getHistory().push('/employee');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: employeeFormActions.CREATE_STARTED,
      });

      await EmployeeService.create(values);

      dispatch({
        type: employeeFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.employee.create.success'),
      );

      getHistory().push('/employee');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: employeeFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: employeeFormActions.UPDATE_STARTED,
      });

      await EmployeeService.update(id, values);

      dispatch({
        type: employeeFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.employee.update.success'),
      );

      getHistory().push('/employee');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: employeeFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default employeeFormActions;
