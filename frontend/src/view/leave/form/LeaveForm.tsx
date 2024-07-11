import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import EmployeeAutocompleteFormItem from 'src/view/employee/autocomplete/EmployeeAutocompleteFormItem';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';

const schema = yup.object().shape({
  startDate: yupFormSchemas.date(
    i18n('entities.startDate.fields.startDate'),
    {},
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.endDate.fields.endDate'),
    {},
  ),
  reason: yupFormSchemas.string(
    i18n('entities.reason.fields.reason'),
    {},
  ),
  employee: yupFormSchemas.relationToMany(
    i18n('entities.employee.fields.employee'),
    {},
  ),
});

const LeaveForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      startDate: record.startDate
        ? moment(record.startDate, 'YYYY-MM-DD').toDate()
        : null,
      endDate: record.endDate
        ? moment(record.endDate, 'YYYY-MM-DD').toDate()
        : null,
      reason: record.reason,
      employee: record.employee || [],
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
              <DatePickerFormItem
                name="startDate"
                label={i18n(
                  'entities.leave.fields.startDate',
                )}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="endDate"
                label={i18n(
                  'entities.leave.fields.endDate',
                )}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="reason"
                label={i18n('entities.leave.fields.reason')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <EmployeeAutocompleteFormItem
                name="employee"
                label={i18n(
                  'entities.leave.fields.employee',
                )}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
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

export default LeaveForm;
