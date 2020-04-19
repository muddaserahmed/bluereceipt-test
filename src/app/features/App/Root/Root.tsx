import React, { useCallback } from "react";

import "./Root.scss";
import TwoColumnGrid from "../../CoreUI/TwoColumnGrid/TwoColumnGrid";
import FormInput from "../../CoreUI/FormInput/FormInput";
import { register } from "../../../../serviceWorker";
import Label from "../../CoreUI/Label/Label";
import DropDown from "../../CoreUI/DropDown/DropDown";
import Checkbox from "../../CoreUI/Checkbox/Checkbox";
import { action } from "@storybook/addon-actions";
import Button from "../../CoreUI/Button/Button";
import { useForm } from "react-hook-form";
import styles from "../../CoreUI/Form/Form.module.scss";

const Root: React.FC = () => {
  const onSubmit = (data: FormData) => {};
  const { register, handleSubmit, errors } = useForm();
  const mapSubmitHandler = useCallback(data => onSubmit(data), [onSubmit]);
  const oncChange = (options: string) => {
    console.log("option", options);
  };
  const data = ["Label 1", "Label 2", "Label 3"];
  return (
    <form onSubmit={handleSubmit(mapSubmitHandler)}>
      <TwoColumnGrid>
        <FormInput
          fillWidth
          label="Firstname *"
          name="firstname"
          placeholder="OguZ Yagiz"
          // ref={register({ required: true })}
          // error={errors.firstname && "First name is required."}
        />
        <FormInput
          fillWidth
          label="Lastname *"
          name="lastname"
          placeholder="Kara"
          // ref={register({ required: true })}
          // error={errors.lastname && "Last name is required."}
        />
        <FormInput
          fillWidth
          label="E-Mail *"
          name="email"
          type="email"
          placeholder="Enter your email"
          // ref={register({ required: true })}
          // error={errors.email && "E-Mail is required."}
        />
        <FormInput
          fillWidth
          label="Phone Number"
          placeholder="+90 (535) 646 8177"
          name="phone"
          ref={register({})}
        />
        <div className={styles.fullWidth}>
          <Label title="Marketing 2">
            <DropDown options={data} onChange={oncChange} />
          </Label>
        </div>
        <Checkbox
          label="Customer Accepts Marketing"
          defaultValue={true}
          onChange={action("changed")}
        />
        <div className={styles.formBtn}>
          <Button size="big" type="submit">
            Add Discount
          </Button>
        </div>
      </TwoColumnGrid>
    </form>
  );
};
export default Root;
