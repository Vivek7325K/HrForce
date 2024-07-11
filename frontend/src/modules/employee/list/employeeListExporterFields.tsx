import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.employee.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.employee.fields.firstName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.employee.fields.lastName'),
  },
  {
    name: 'email',
    label: i18n('entities.employee.fields.email'),
  },
  {
    name: 'password',
    label: i18n('entities.employee.fields.password'),
  },
  {
    name: 'joining',
    label: i18n('entities.employee.fields.joining'),
    render: exporterRenders.date(),
  },
  {
    name: 'role',
    label: i18n('entities.employee.fields.role'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.employee.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.employee.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
