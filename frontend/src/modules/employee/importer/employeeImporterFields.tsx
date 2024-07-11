import { i18n } from 'src/i18n';
import schemas from 'src/modules/shared/yup/yupImporterSchemas';

export default [
  {
    name: 'firstName',
    label: i18n('entities.firstName.fields.firstName'),
    schema: schemas.string(
      i18n('entities.firstName.fields.firstName'),
      {},
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.lastName.fields.lastName'),
    schema: schemas.string(
      i18n('entities.lastName.fields.lastName'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.email.fields.email'),
    schema: schemas.string(
      i18n('entities.email.fields.email'),
      {},
    ),
  },
  {
    name: 'password',
    label: i18n('entities.password.fields.password'),
    schema: schemas.string(
      i18n('entities.password.fields.password'),
      {},
    ),
  },
];
