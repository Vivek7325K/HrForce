import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/attendance/list/attendanceListActions';
import selectors from 'src/modules/attendance/list/attendanceListSelectors';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { AppDispatch } from 'src/modules/store';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';

const schema = yup.object().shape({
  timeInRange: yupFilterSchemas.datetimeRange(
    i18n('entities.attendance.fields.timeInRange'),
  ),
  timeOutRange: yupFilterSchemas.datetimeRange(
    i18n('entities.attendance.fields.timeOutRange'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.attendance.fields.dateRange'),
  ),
});

const emptyValues = {
  timeInRange: [],
  timeOutRange: [],
  dateRange: [],
};

const previewRenders = {
  timeInRange: {
    label: i18n('entities.attendance.fields.timeInRange'),
    render: filterRenders.datetimeRange(),
  },
  timeOutRange: {
    label: i18n('entities.attendance.fields.timeOutRange'),
    render: filterRenders.datetimeRange(),
  },
  dateRange: {
    label: i18n('entities.attendance.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
};

const AttendanceListFilter = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema as yup.AnyObjectSchema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <DatePickerRangeFormItem
                    name="timeInRange"
                    label={i18n(
                      'entities.attendance.fields.timeInRange',
                    )}
                    showTimeInput
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <DatePickerRangeFormItem
                    name="timeOutRange"
                    label={i18n(
                      'entities.attendance.fields.timeOutRange',
                    )}
                    showTimeInput
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n(
                      'entities.attendance.fields.dateRange',
                    )}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
};

export default AttendanceListFilter;
