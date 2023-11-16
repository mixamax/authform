import React from "react";
import styles from "./MainButton.module.css";

export function MainButton({ bg_color, text, text_color, setIsClick }) {
    return (
        <button
            onClick={() => setIsClick(true)}
            className={styles["main-button"]}
            style={{
                backgroundColor: bg_color || "none",
                color: text_color || "none",
            }}
        >
            {text}
        </button>
    );
}
