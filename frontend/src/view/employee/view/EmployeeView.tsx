import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

const EmployeeView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.employee.fields.firstName')}
        value={record.firstName}
      />

      <TextViewItem
        label={i18n('entities.employee.fields.lastName')}
        value={record.lastName}
      />

      <TextViewItem
        label={i18n('entities.employee.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.employee.fields.password')}
        value={record.password}
      />

      <TextViewItem
        label={i18n('entities.employee.fields.joining')}
        value={record.joining}
      />

      <UserViewItem
        label={i18n('entities.employee.fields.role')}
        value={record.role}
      />
    </ViewWrapper>
  );
};

export default EmployeeView;
