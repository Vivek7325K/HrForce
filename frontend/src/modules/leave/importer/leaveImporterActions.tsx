import { i18n } from 'src/i18n';
import fields from 'src/modules/leave/importer/leaveImporterFields';
import selectors from 'src/modules/leave/importer/leaveImporterSelectors';
import LeaveService from 'src/modules/leave/leaveService';
import importerActions from 'src/modules/shared/importer/importerActions';

const leaveImporterActions = importerActions(
  'LEAVE_IMPORTER',
  selectors,
  LeaveService.import,
  fields,
  i18n('entities.leave.importer.fileName'),
);

export default leaveImporterActions;
