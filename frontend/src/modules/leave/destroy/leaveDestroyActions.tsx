import { i18n } from 'src/i18n';
import LeaveService from 'src/modules/leave/leaveService';
import listActions from 'src/modules/leave/list/leaveListActions';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'LEAVE_DESTROY';

const leaveDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: leaveDestroyActions.DESTROY_STARTED,
      });

      await LeaveService.destroyAll([id]);

      dispatch({
        type: leaveDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.leave.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/leave');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: leaveDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: leaveDestroyActions.DESTROY_ALL_STARTED,
      });

      await LeaveService.destroyAll(ids);

      dispatch({
        type: leaveDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.leave.destroyAll.success'),
      );

      getHistory().push('/leave');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: leaveDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default leaveDestroyActions;
