import React from "react";
import s from "./Input.module.scss";
import { Icon } from "../../../Icon";

function Input({
  onIconClick,
  value,
  label,
  fields,
  onChange,
  name,
  ...props
}) {
  return (
    <div className={s.container}>
      <label className={s.label}>
        {label}
        <input
          name={name}
          label={label}
          onChange={onChange}
          value={value}
          {...props}
        />

        {props.icon ? (
          <Icon
            id={name}
            className={s.icon}
            name="swichPassword"
            size="25px"
            onClick={onIconClick}
          />
        ) : (
          ""
        )}
      </label>
    </div>
  );
}

export default Input;
