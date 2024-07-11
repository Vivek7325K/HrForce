import { createSelector } from 'reselect';

const selectRaw = (state) => state.leave.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const leaveDestroySelectors = {
  selectLoading,
};

export default leaveDestroySelectors;
