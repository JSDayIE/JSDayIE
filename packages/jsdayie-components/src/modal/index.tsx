import React from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  toggleHandler: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, title, children, toggleHandler } = props;
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-warning btn-lg"
              data-dismiss="modal"
              onClick={() => toggleHandler()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
