import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.firstName.fields.firstName'),
    {},
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.lastName.fields.lastName'),
    {},
  ),
  email: yupFormSchemas.string(
    i18n('entities.email.fields.email'),
    {},
  ),
  password: yupFormSchemas.string(
    i18n('entities.password.fields.password'),
    {},
  ),
  joining: yupFormSchemas.date(
    i18n('entities.joining.fields.joining'),
    {},
  ),
  role: yupFormSchemas.relationToMany(
    i18n('entities.role.fields.role'),
    {},
  ),
});

const EmployeeForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      email: record.email,
      password: record.password,
      joining: record.joining
        ? moment(record.joining, 'YYYY-MM-DD').toDate()
        : null,
      role: record.role || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema as yup.AnyObjectSchema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="firstName"
                label={i18n(
                  'entities.employee.fields.firstName',
                )}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="lastName"
                label={i18n(
                  'entities.employee.fields.lastName',
                )}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="email"
                label={i18n(
                  'entities.employee.fields.email',
                )}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="password"
                label={i18n(
                  'entities.employee.fields.password',
                )}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="joining"
                label={i18n(
                  'entities.employee.fields.joining',
                )}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12"></div>
          </div>
          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default EmployeeForm;
