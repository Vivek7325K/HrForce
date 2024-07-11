/// File is generated from https://studio.fabbuilder.com - leave

export default (app) => {
  app.post(
    `/tenant/:tenantId/leave`,
    require('./leaveCreate').default,
  );
  app.put(
    `/tenant/:tenantId/leave/:id`,
    require('./leaveUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/leave/import`,
    require('./leaveImport').default,
  );
  app.delete(
    `/tenant/:tenantId/leave`,
    require('./leaveDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/leave/autocomplete`,
    require('./leaveAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/leave/count`,
    require('./leaveCount').default,
  );
  app.get(
    `/tenant/:tenantId/leave`,
    require('./leaveList').default,
  );
  app.get(
    `/tenant/:tenantId/leave/:id`,
    require('./leaveFind').default,
  );
};
/// File is generated from https://studio.fabbuilder.com - leave
