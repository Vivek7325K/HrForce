import { i18n } from 'src/i18n';
import DepartmentListFilter from 'src/view/department/list/DepartmentListFilter';
import DepartmentListTable from 'src/view/department/list/DepartmentListTable';
import DepartmentListToolbar from 'src/view/department/list/DepartmentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DepartmentListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.department.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.department.list.title')}
        </PageTitle>

        <DepartmentListToolbar />
        <DepartmentListFilter />
        <DepartmentListTable />
      </ContentWrapper>
    </>
  );
};

export default DepartmentListPage;
