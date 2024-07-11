import { i18n } from 'src/i18n';
import LeaveService from 'src/modules/leave/leaveService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'LEAVE_FORM';

const leaveFormActions = {
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
        type: leaveFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await LeaveService.find(id);
      }

      dispatch({
        type: leaveFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: leaveFormActions.INIT_ERROR,
      });

      getHistory().push('/leave');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: leaveFormActions.CREATE_STARTED,
      });

      await LeaveService.create(values);

      dispatch({
        type: leaveFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.leave.create.success'),
      );

      getHistory().push('/leave');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: leaveFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: leaveFormActions.UPDATE_STARTED,
      });

      await LeaveService.update(id, values);

      dispatch({
        type: leaveFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.leave.update.success'),
      );

      getHistory().push('/leave');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: leaveFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default leaveFormActions;
