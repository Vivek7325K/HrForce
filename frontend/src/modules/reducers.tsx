import { combineReducers } from 'redux';
import attendance from 'src/modules/attendance/attendanceReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import auth from 'src/modules/auth/authReducers';
import department from 'src/modules/department/departmentReducers';
import employee from 'src/modules/employee/employeeReducers';
import layout from 'src/modules/layout/layoutReducers';
import leave from 'src/modules/leave/leaveReducers';
import plan from 'src/modules/plan/planReducers';
import settings from 'src/modules/settings/settingsReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';

export default () =>
  combineReducers({
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    employee,
    department,
    leave,
    attendance,
  });
