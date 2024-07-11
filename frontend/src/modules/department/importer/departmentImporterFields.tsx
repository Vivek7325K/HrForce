import { i18n } from 'src/i18n';
import schemas from 'src/modules/shared/yup/yupImporterSchemas';

export default [
  {
    name: 'name',
    label: i18n('entities.name.fields.name'),
    schema: schemas.string(
      i18n('entities.name.fields.name'),
      {},
    ),
  },
  {
    name: 'employee',
    label: i18n('entities.employee.fields.employee'),
    schema: schemas.relationToOne(
      i18n('entities.employee.fields.employee'),
      {},
    ),
  },
];