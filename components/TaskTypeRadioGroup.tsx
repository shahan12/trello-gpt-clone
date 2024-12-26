import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import React from "react";

function TaskTypeRadioGroup() {
  return (
    <RadioGroup
      //   value={selected}
      //   onChange={setSelected}
      aria-label="Server size"
    >
      {["To-Do", "In Progress", "Done"].map((plan) => (
        <Field key={plan} className="flex items-center gap-2">
          <Radio
            value={plan}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400 data-[disabled]:bg-gray-100"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{plan}</Label>
        </Field>
      ))}
    </RadioGroup>
  );
}

export default TaskTypeRadioGroup;
