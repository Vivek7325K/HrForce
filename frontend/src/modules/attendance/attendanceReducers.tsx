import { combineReducers } from 'redux';
import destroy from 'src/modules/attendance/destroy/attendanceDestroyReducers';
import form from 'src/modules/attendance/form/attendanceFormReducers';
import importerReducer from 'src/modules/attendance/importer/attendanceImporterReducers';
import list from 'src/modules/attendance/list/attendanceListReducers';
import view from 'src/modules/attendance/view/attendanceViewReducers';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
