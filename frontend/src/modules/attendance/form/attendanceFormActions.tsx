import { i18n } from 'src/i18n';
import AttendanceService from 'src/modules/attendance/attendanceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ATTENDANCE_FORM';

const attendanceFormActions = {
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
        type: attendanceFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AttendanceService.find(id);
      }

      dispatch({
        type: attendanceFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: attendanceFormActions.INIT_ERROR,
      });

      getHistory().push('/attendance');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: attendanceFormActions.CREATE_STARTED,
      });

      await AttendanceService.create(values);

      dispatch({
        type: attendanceFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.attendance.create.success'),
      );

      getHistory().push('/attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: attendanceFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: attendanceFormActions.UPDATE_STARTED,
      });

      await AttendanceService.update(id, values);

      dispatch({
        type: attendanceFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.attendance.update.success'),
      );

      getHistory().push('/attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: attendanceFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default attendanceFormActions;
