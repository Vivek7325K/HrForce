import { i18n } from 'src/i18n';
import AttendanceService from 'src/modules/attendance/attendanceService';
import listActions from 'src/modules/attendance/list/attendanceListActions';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ATTENDANCE_DESTROY';

const attendanceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: attendanceDestroyActions.DESTROY_STARTED,
      });

      await AttendanceService.destroyAll([id]);

      dispatch({
        type: attendanceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.attendance.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: attendanceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: attendanceDestroyActions.DESTROY_ALL_STARTED,
      });

      await AttendanceService.destroyAll(ids);

      dispatch({
        type: attendanceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.attendance.destroyAll.success'),
      );

      getHistory().push('/attendance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: attendanceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default attendanceDestroyActions;
