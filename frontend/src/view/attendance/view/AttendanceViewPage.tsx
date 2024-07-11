import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/attendance/view/attendanceViewActions';
import selectors from 'src/modules/attendance/view/attendanceViewSelectors';
import { AppDispatch } from 'src/modules/store';
import AttendanceView from 'src/view/attendance/view/AttendanceView';
import AttendanceViewToolbar from 'src/view/attendance/view/AttendanceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AttendancePage = (props) => {
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
          [i18n('entities.attendance.menu'), '/attendance'],
          [i18n('entities.attendance.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.attendance.view.title')}
        </PageTitle>

        <AttendanceViewToolbar id={id} />

        <AttendanceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AttendancePage;
