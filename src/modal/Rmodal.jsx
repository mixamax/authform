import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export function Rmodal({ isModalOpen, closeModal, children }) {
    return (
        <>
            <ReactModal
                isOpen={isModalOpen}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={closeModal}
                style={{
                    overlay: {},
                    content: {
                        width: "99%",
                        maxWidth: "500px",
                        inset: 0,
                        padding: "20px",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        margin: "auto",
                        height: "fit-content",
                    },
                }}
            >
                {children}
            </ReactModal>
        </>
    );
}
