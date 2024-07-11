import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import TextViewItem from 'src/view/shared/view/TextViewItem';

import EmployeeViewItem from 'src/view/employee/view/EmployeeViewItem';

const LeaveView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.leave.fields.startDate')}
        value={record.startDate}
      />

      <TextViewItem
        label={i18n('entities.leave.fields.endDate')}
        value={record.endDate}
      />

      <TextViewItem
        label={i18n('entities.leave.fields.reason')}
        value={record.reason}
      />

      <EmployeeViewItem
        label={i18n('entities.leave.fields.employee')}
        value={record.employee}
      />
    </ViewWrapper>
  );
};

export default LeaveView;
