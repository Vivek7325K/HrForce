import { i18n } from 'src/i18n';
import DepartmentService from 'src/modules/department/departmentService';
import listActions from 'src/modules/department/list/departmentListActions';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DEPARTMENT_DESTROY';

const departmentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: departmentDestroyActions.DESTROY_STARTED,
      });

      await DepartmentService.destroyAll([id]);

      dispatch({
        type: departmentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.department.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/department');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: departmentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: departmentDestroyActions.DESTROY_ALL_STARTED,
      });

      await DepartmentService.destroyAll(ids);

      dispatch({
        type: departmentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.department.destroyAll.success'),
      );

      getHistory().push('/department');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: departmentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default departmentDestroyActions;