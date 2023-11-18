import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import { ReactComponent as MailIcon } from "../assets/mail.svg";
import { ReactComponent as LockIcon } from "../assets/lock.svg";

export function SignUpForm({ closeModal, setShowImg }) {
    const [mailValue, setMailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [confirmValue, setConfirmValue] = useState("");
    const [alert, setAlert] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(mailValue, passValue);
        if (mailValue.trim() === "" || passValue.trim() === "") {
            setAlert("* поле не может быть пустым");
            return;
        }
        if (passValue !== confirmValue) {
            setAlert("* пароли не совпадают");
            return;
        }
        localStorage.setItem(mailValue, passValue);
        setMailValue("");
        setPassValue("");
        setShowImg(true);
        closeModal();
    };
    const onChangeMail = (e) => {
        setMailValue(e.target.value);
    };
    const onChangePass = (e) => {
        setPassValue(e.target.value);
    };
    const onChangeConfirm = (e) => {
        setConfirmValue(e.target.value);
    };
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.input_container}>
                <MailIcon height={"1.4rem"} />
                <label className={styles.lable_block}>
                    email
                    <input
                        className={styles.input_block}
                        type="email"
                        autoComplete="new-name"
                        placeholder="mail@example.com"
                        onChange={onChangeMail}
                        value={mailValue}
                    />
                </label>
            </div>
            <div className={styles.input_container}>
                <LockIcon height={"1.4rem"} />
                <label className={styles.lable_block}>
                    password
                    <input
                        className={styles.input_block}
                        type="password"
                        autoComplete="new-password"
                        placeholder="password"
                        onChange={onChangePass}
                        value={passValue}
                    ></input>
                </label>
            </div>
            <div className={styles.input_container}>
                <LockIcon height={"1.4rem"} />
                <label className={styles.lable_block}>
                    password
                    <input
                        className={styles.input_block}
                        type="password"
                        autoComplete="new-password"
                        placeholder="confirm password"
                        onChange={onChangeConfirm}
                        value={confirmValue}
                    ></input>
                </label>
            </div>

            <input
                type="submit"
                className={styles.input_submit}
                value="Войти"
            />
            <span className={styles.alert}>{alert}</span>
        </form>
    );
}
