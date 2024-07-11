import { createSelector } from 'reselect';

const selectRaw = (state) => state.employee.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const employeeDestroySelectors = {
  selectLoading,
};

export default employeeDestroySelectors;
