import { i18n } from 'src/i18n';
import DepartmentService from 'src/modules/department/departmentService';
import fields from 'src/modules/department/importer/departmentImporterFields';
import selectors from 'src/modules/department/importer/departmentImporterSelectors';
import importerActions from 'src/modules/shared/importer/importerActions';

const departmentImporterActions = importerActions(
  'DEPARTMENT_IMPORTER',
  selectors,
  DepartmentService.import,
  fields,
  i18n('entities.department.importer.fileName'),
);

export default departmentImporterActions;
