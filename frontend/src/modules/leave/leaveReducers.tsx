import { combineReducers } from 'redux';
import destroy from 'src/modules/leave/destroy/leaveDestroyReducers';
import form from 'src/modules/leave/form/leaveFormReducers';
import importerReducer from 'src/modules/leave/importer/leaveImporterReducers';
import list from 'src/modules/leave/list/leaveListReducers';
import view from 'src/modules/leave/view/leaveViewReducers';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
