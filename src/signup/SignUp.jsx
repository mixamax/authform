import React, { useState } from "react";
import { MainButton } from "../main_button/MainButton";
import ReactModal from "react-modal";
import { Rmodal } from "../modal/Rmodal";
import { SignUpForm } from "./SignUpForm";

ReactModal.setAppElement("#root");

export function SignUp({ setShowImg }) {
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
            <MainButton
                text={"SignUp"}
                bg_color={"rgb(137, 56, 200)"}
                text_color={"white"}
                setIsClick={setIsClick}
            />
            <Rmodal isModalOpen={isModalOpen} closeModal={closeModal}>
                <SignUpForm closeModal={closeModal} setShowImg={setShowImg} />
            </Rmodal>
        </>
    );
}
