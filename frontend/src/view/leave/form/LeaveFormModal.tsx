import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'src/i18n';
import LeaveService from 'src/modules/leave/leaveService';
import Errors from 'src/modules/shared/error/errors';
import LeaveForm from 'src/view/leave/form/LeaveForm';

const LeaveFormModal = (props) => {
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
      const { id } = await LeaveService.create(data);
      const record = await LeaveService.find(id);
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
              {i18n('entities.leave.new.title')}
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
            <LeaveForm
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

export default LeaveFormModal;