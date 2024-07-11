import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/department/view/departmentViewActions';
import selectors from 'src/modules/department/view/departmentViewSelectors';
import { AppDispatch } from 'src/modules/store';
import DepartmentView from 'src/view/department/view/DepartmentView';
import DepartmentViewToolbar from 'src/view/department/view/DepartmentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DepartmentPage = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.department.menu'), '/department'],
          [i18n('entities.department.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.department.view.title')}
        </PageTitle>

        <DepartmentViewToolbar id={id} />

        <DepartmentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DepartmentPage;
