import { i18n } from 'src/i18n';
import EmployeeListFilter from 'src/view/employee/list/EmployeeListFilter';
import EmployeeListTable from 'src/view/employee/list/EmployeeListTable';
import EmployeeListToolbar from 'src/view/employee/list/EmployeeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EmployeeListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.employee.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.employee.list.title')}
        </PageTitle>

        <EmployeeListToolbar />
        <EmployeeListFilter />
        <EmployeeListTable />
      </ContentWrapper>
    </>
  );
};

export default EmployeeListPage;
