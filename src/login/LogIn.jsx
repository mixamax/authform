import React, { useState } from "react";
import { MainButton } from "../main_button/MainButton";
import ReactModal from "react-modal";
import { Rmodal } from "../modal/Rmodal";
import { LoginForm } from "./LoginForm";

ReactModal.setAppElement("#root");

export function LogIn({ setShowImg }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    if (isClick) {
        openModal();
        setIsClick(false);
    }

    return (
        <>
            <MainButton text={"LogIn"} setIsClick={setIsClick} />
            <Rmodal isModalOpen={isModalOpen} closeModal={closeModal}>
                <LoginForm closeModal={closeModal} setShowImg={setShowImg} />
            </Rmodal>
        </>
    );
}
