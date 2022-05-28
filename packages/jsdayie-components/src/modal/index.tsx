import React from "react";

interface ModalProps {
    title: string;
    isOpen: boolean;
    toggleHandler: () => void;
    children: React.ReactNode;
}
  
export const Modal: React.FC<ModalProps> = props => {
        return (
            <div
                className={`modal fade ${props.isOpen ? 'show' : ''}`}
                style={{ display: props.isOpen ? 'block' : 'none' }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">{props.title}</h3>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-warning btn-lg"
                            data-dismiss="modal"
                            onClick={() => props.toggleHandler()}
                        >
                            Close
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        );
}
