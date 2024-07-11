import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.leave.fields.id'),
  },
  {
    name: 'startDate',
    label: i18n('entities.leave.fields.startDate'),
    render: exporterRenders.date(),
  },
  {
    name: 'endDate',
    label: i18n('entities.leave.fields.endDate'),
    render: exporterRenders.date(),
  },
  {
    name: 'reason',
    label: i18n('entities.leave.fields.reason'),
  },
  {
    name: 'employee',
    label: i18n('entities.leave.fields.employee'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.leave.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.leave.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
