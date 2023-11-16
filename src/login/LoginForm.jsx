import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { ReactComponent as MailIcon } from "../assets/mail.svg";
import { ReactComponent as LockIcon } from "../assets/lock.svg";

export function LoginForm({ closeModal, setShowImg }) {
    const [mailValue, setMailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [alert, setAlert] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const currentPass = localStorage.getItem(mailValue);
        if (!currentPass) {
            setAlert("* такой пользователь не зарегистрирован");
            return;
        }
        if (passValue !== currentPass) {
            setAlert("* пароль не верен");
            return;
        }

        console.log("Вход");
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

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.input_container}>
                <MailIcon height={"1.4rem"} />
                <label className={styles.lable_block}>
                    email
                    <input
                        className={styles.input_block}
                        type="email"
                        placeholder="mail@example.com"
                        autoComplete="user-mail"
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
                        autoComplete="current-password"
                        placeholder="password"
                        onChange={onChangePass}
                        value={passValue}
                    ></input>
                </label>
            </div>

            <input
                type="submit"
                className={styles.input_submit}
                value="Войти"
            />
            <p>
                Not registered? <a href="/">Create an account</a>
            </p>
            <span className={styles.alert}>{alert}</span>
        </form>
    );
}
