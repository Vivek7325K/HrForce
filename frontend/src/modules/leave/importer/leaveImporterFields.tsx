import { i18n } from 'src/i18n';
import schemas from 'src/modules/shared/yup/yupImporterSchemas';

export default [
  {
    name: 'reason',
    label: i18n('entities.reason.fields.reason'),
    schema: schemas.string(
      i18n('entities.reason.fields.reason'),
      {},
    ),
  },
];
