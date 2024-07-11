import { combineReducers } from 'redux';
import destroy from 'src/modules/department/destroy/departmentDestroyReducers';
import form from 'src/modules/department/form/departmentFormReducers';
import importerReducer from 'src/modules/department/importer/departmentImporterReducers';
import list from 'src/modules/department/list/departmentListReducers';
import view from 'src/modules/department/view/departmentViewReducers';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
