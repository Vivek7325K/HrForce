import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.attendance.fields.id'),
  },
  {
    name: 'timeIn',
    label: i18n('entities.attendance.fields.timeIn'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'timeOut',
    label: i18n('entities.attendance.fields.timeOut'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'date',
    label: i18n('entities.attendance.fields.date'),
    render: exporterRenders.date(),
  },
  {
    name: 'employee',
    label: i18n('entities.attendance.fields.employee'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.attendance.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.attendance.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
