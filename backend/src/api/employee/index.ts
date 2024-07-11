/// File is generated from https://studio.fabbuilder.com - employee

export default (app) => {
  app.post(
    `/tenant/:tenantId/employee`,
    require('./employeeCreate').default,
  );
  app.put(
    `/tenant/:tenantId/employee/:id`,
    require('./employeeUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/employee/import`,
    require('./employeeImport').default,
  );
  app.delete(
    `/tenant/:tenantId/employee`,
    require('./employeeDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/employee/autocomplete`,
    require('./employeeAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/employee/count`,
    require('./employeeCount').default,
  );
  app.get(
    `/tenant/:tenantId/employee`,
    require('./employeeList').default,
  );
  app.get(
    `/tenant/:tenantId/employee/:id`,
    require('./employeeFind').default,
  );
};
/// File is generated from https://studio.fabbuilder.com - employee
