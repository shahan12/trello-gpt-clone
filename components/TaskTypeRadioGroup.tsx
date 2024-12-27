import { useBoardStore } from "@/store/boardStore";
import {
  Description,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import React from "react";

function TaskTypeRadioGroup() {
  const type = [
    {
      id: "todo",
      name: "Todo",
      description: "A new task to be completed",
      color: "bg-red-500",
    },
    {
      id: "inprogress",
      name: "In Progress",
      description: "A task that is being worked on",
      color: "bg-yello-500",
    },
    {
      id: "todo",
      name: "Todo",
      description: "A new task that has been completed",
      color: "bg-green-500",
    },
  ];
  const newTaskType = useBoardStore((state) => state.newTaskType);
  const setNewTaskType = useBoardStore((state) => state.setNewTaskType);
  return (
    <RadioGroup
      //   value={selected}
      //   onChange={setSelected}
      aria-label="Server size"
      className="mt-4"
    >
      {type.map((plan, index) => (
        <Field
          key={`${plan.id}_${index}`}
          className="flex items-center gap-2 mt-2"
        >
          <Radio
            value={plan.id}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400 data-[disabled]:bg-gray-100"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{plan.name}</Label>
        </Field>
      ))}
    </RadioGroup>
  );
}

export default TaskTypeRadioGroup;
