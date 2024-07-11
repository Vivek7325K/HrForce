import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import LeaveListFilter from 'src/view/leave/list/LeaveListFilter';
import LeaveListTable from 'src/view/leave/list/LeaveListTable';
import LeaveListToolbar from 'src/view/leave/list/LeaveListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const LeaveListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.leave.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.leave.list.title')}
        </PageTitle>

        <LeaveListToolbar />
        <LeaveListFilter />
        <LeaveListTable />
      </ContentWrapper>
    </>
  );
};

export default LeaveListPage;
