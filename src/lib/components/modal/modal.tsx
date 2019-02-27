import React from "react";

interface ModalProps {}

interface ModalState {}

export class Modal extends React.Component<ModalProps, ModalState> {
    public render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
