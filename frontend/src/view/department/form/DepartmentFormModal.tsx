import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'src/i18n';
import DepartmentService from 'src/modules/department/departmentService';
import Errors from 'src/modules/shared/error/errors';
import DepartmentForm from 'src/view/department/form/DepartmentForm';

const DepartmentFormModal = (props) => {
  const modalRef = useRef<any>();
  const modalInstanceRef = useRef<any>();
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    if (modalRef.current) {
      const modal = new Modal(modalRef.current);
      modal.show();
      modalInstanceRef.current = modal;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DepartmentService.create(data);
      const record = await DepartmentService.find(id);
      modalInstanceRef.current?.hide();
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  const doCancel = () => {
    if (modalInstanceRef.current) {
      modalInstanceRef.current.hide();
      props.onClose();
    }
  };

  return ReactDOM.createPortal(
    <div ref={modalRef} className="modal" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {i18n('entities.department.new.title')}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={doCancel}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <DepartmentForm
              saveLoading={saveLoading}
              onSubmit={doSubmit}
              onCancel={doCancel}
              modal
            />
          </div>
        </div>
      </div>
    </div>,
    (document as any).getElementById('modal-root'),
  ) as unknown as JSX.Element;
};

export default DepartmentFormModal;
