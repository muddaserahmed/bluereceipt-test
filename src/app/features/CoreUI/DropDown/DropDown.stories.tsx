import React from "react";
import DropDown from "./DropDown";
import styles from "./DropDown.module.scss";

export default {
  component: DropDown,
  title: "DropDown"
};

const oncChange = (options: string) => {
  console.log("option", options);
};
const data = ["Label 1", "Label 2", "Label 3"];

export const normal = () => (
  <DropDown options={data} onChange={oncChange}></DropDown>
);

export const multi = () => (
  <DropDown options={data} onChange={oncChange} multiple={true}></DropDown>
);

export const active = () => (
  <DropDown options={data} onChange={oncChange}></DropDown>
);

export const blank = () => (
  <DropDown options={[]} onChange={oncChange} multiple={true}></DropDown>
);
