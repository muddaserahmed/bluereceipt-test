import React, { useState, useRef, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import styles from "./DropDown.module.scss";
import Checkbox from "../Checkbox/Checkbox";
import classNames from "classnames";
import DropDownIcon from "../Icons/DropDownIcon";

interface Props {
  options: string[];
  onChange(param: string): void;
  multiple?: boolean;
}
export default function DropDown(props: Props) {
  const [state, setState] = useState({
    open: false,
    value: props.options[0] || "Label"
  });

  const ref = useRef<any>();
  useEffect(() => {
    if (state.open) document.addEventListener("click", hClick);
  }, [state.open]);
  const hClick = (e: MouseEvent) => {
    // inside click
    if (ref.current?.contains(e.target)) return;

    // outside click
    document.removeEventListener("click", hClick);
    setState({ ...state, open: false });
  };
  return (
    <>
      <div
        className={styles.dropdown}
        onClick={() => setState({ ...state, open: true })}
      >
        {state.value}
        <DropDownIcon />
      </div>
      <div
        ref={ref}
        className={styles.options}
        style={{ display: state.open ? "block" : "none" }}
      >
        {props.options.map(option => {
          const handleClick = () => {
            if (!props.multiple) {
              document.removeEventListener("click", hClick);
              setState({ open: false, value: option });
            }
            props.onChange(option);
          };
          return (
            <div
              key={option}
              onClick={handleClick}
              className={classNames(
                styles.list,
                state.value === option ? styles.active : null
              )}
            >
              {props.multiple ? (
                <Checkbox label={option} onChange={action("changed")} />
              ) : (
                option
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
