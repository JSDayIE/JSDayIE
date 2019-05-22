import React from "react";
import "./modal.css";

interface ModalProps {
    title: string;
    isOpen: boolean;
    toggleHandler: () => void;
}

export class Modal extends React.Component<ModalProps> {
    public render() {
        return (
            <div
                className={`modal fade ${this.props.isOpen ? 'show' : ''}`}
                style={{ display: this.props.isOpen ? 'block' : 'none' }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">{this.props.title}</h3>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-warning btn-lg"
                            data-dismiss="modal"
                            onClick={() => this.props.toggleHandler()}
                        >
                            Close
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
