import { createSelector } from 'reselect';

const selectRaw = (state) => state.leave.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const leaveViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default leaveViewSelectors;
