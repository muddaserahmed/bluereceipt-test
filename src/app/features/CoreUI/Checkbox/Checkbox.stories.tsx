import React from "react";
import { action } from "@storybook/addon-actions";
import styles from "./Checkbox.module.scss";
import Checkbox from "./Checkbox";

export default {
  component: Checkbox,
  title: "Checkbox"
};

export const normal = () => (
  <Checkbox label="Checkbox" onChange={action("changed")} />
);

export const Active = () => (
  <Checkbox label="Checkbox" defaultValue onChange={action("changed")} />
);

export const Hover = () => (
  <Checkbox label="Checkbox" onChange={action("changed")} />
);

export const Disabled = () => <Checkbox label="Checkbox" disabled />;

export const Focus = () => (
  <Checkbox label="Checkbox" onChange={action("changed")} />
);
