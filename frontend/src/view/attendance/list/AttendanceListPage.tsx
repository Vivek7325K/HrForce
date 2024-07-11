import { i18n } from 'src/i18n';
import AttendanceListFilter from 'src/view/attendance/list/AttendanceListFilter';
import AttendanceListTable from 'src/view/attendance/list/AttendanceListTable';
import AttendanceListToolbar from 'src/view/attendance/list/AttendanceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AttendanceListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.attendance.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.attendance.list.title')}
        </PageTitle>

        <AttendanceListToolbar />
        <AttendanceListFilter />
        <AttendanceListTable />
      </ContentWrapper>
    </>
  );
};

export default AttendanceListPage;
