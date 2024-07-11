import { i18n } from 'src/i18n';
import AttendanceService from 'src/modules/attendance/attendanceService';
import fields from 'src/modules/attendance/importer/attendanceImporterFields';
import selectors from 'src/modules/attendance/importer/attendanceImporterSelectors';
import importerActions from 'src/modules/shared/importer/importerActions';

const attendanceImporterActions = importerActions(
  'ATTENDANCE_IMPORTER',
  selectors,
  AttendanceService.import,
  fields,
  i18n('entities.attendance.importer.fileName'),
);

export default attendanceImporterActions;
