import React from "react";
import classNames from "classnames/bind"
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

import styles from "./CheckBox.module.css";

const cs = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
    const blue = "";
    return (
        <div className={cs('checkbox', 'etc..', blue)}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={styles.icon}>
                    {checked ? 
                    <MdCheckBox className={styles.checked}/> : 
                    <MdCheckBoxOutlineBlank />}
                </div>
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox;