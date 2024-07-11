import moment from 'moment';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import TextViewItem from 'src/view/shared/view/TextViewItem';

import EmployeeViewItem from 'src/view/employee/view/EmployeeViewItem';

const AttendanceView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.attendance.fields.timeIn')}
        value={moment(record.timeIn).format(
          'YYYY-MM-DD HH:mm',
        )}
      />

      <TextViewItem
        label={i18n('entities.attendance.fields.timeOut')}
        value={moment(record.timeOut).format(
          'YYYY-MM-DD HH:mm',
        )}
      />
      <TextViewItem
        label={i18n('entities.attendance.fields.date')}
        value={record.date}
      />

      <EmployeeViewItem
        label={i18n('entities.attendance.fields.employee')}
        value={record.employee}
      />
    </ViewWrapper>
  );
};

export default AttendanceView;
