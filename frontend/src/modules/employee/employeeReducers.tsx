import { combineReducers } from 'redux';
import destroy from 'src/modules/employee/destroy/employeeDestroyReducers';
import form from 'src/modules/employee/form/employeeFormReducers';
import importerReducer from 'src/modules/employee/importer/employeeImporterReducers';
import list from 'src/modules/employee/list/employeeListReducers';
import view from 'src/modules/employee/view/employeeViewReducers';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
