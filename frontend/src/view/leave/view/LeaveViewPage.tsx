import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/leave/view/leaveViewActions';
import selectors from 'src/modules/leave/view/leaveViewSelectors';
import { AppDispatch } from 'src/modules/store';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import LeaveView from 'src/view/leave/view/LeaveView';
import LeaveViewToolbar from 'src/view/leave/view/LeaveViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const LeavePage = (props) => {
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
          [i18n('entities.leave.menu'), '/leave'],
          [i18n('entities.leave.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.leave.view.title')}
        </PageTitle>

        <LeaveViewToolbar id={id} />

        <LeaveView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default LeavePage;
