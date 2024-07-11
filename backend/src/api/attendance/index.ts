/// File is generated from https://studio.fabbuilder.com - attendance

export default (app) => {
  app.post(
    `/tenant/:tenantId/attendance`,
    require('./attendanceCreate').default,
  );
  app.put(
    `/tenant/:tenantId/attendance/:id`,
    require('./attendanceUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/attendance/import`,
    require('./attendanceImport').default,
  );
  app.delete(
    `/tenant/:tenantId/attendance`,
    require('./attendanceDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/attendance/autocomplete`,
    require('./attendanceAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/attendance/count`,
    require('./attendanceCount').default,
  );
  app.get(
    `/tenant/:tenantId/attendance`,
    require('./attendanceList').default,
  );
  app.get(
    `/tenant/:tenantId/attendance/:id`,
    require('./attendanceFind').default,
  );
};
/// File is generated from https://studio.fabbuilder.com - attendance
