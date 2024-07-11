import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/leave/form/leaveFormActions';
import selectors from 'src/modules/leave/form/leaveFormSelectors';
import { AppDispatch, getHistory } from 'src/modules/store';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import LeaveForm from 'src/view/leave/form/LeaveForm';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

const LeaveFormPage = (props) => {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(id);
  const title = isEditing
    ? i18n('entities.leave.edit.title')
    : i18n('entities.leave.new.title');

  useEffect(() => {
    dispatch(actions.doInit(id));
    setDispatched(true);
  }, [dispatch, id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.leave.menu'), '/leave'],
          [title],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{title}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <LeaveForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/leave')}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default LeaveFormPage;
