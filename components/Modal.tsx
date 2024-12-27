"use client";
import { useBoardStore } from "@/store/boardStore";
import { useModalStore } from "@/store/ModalStore";
import {
  Checkbox,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";

function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  const newTaskInput = useBoardStore((state) => state.newTaskInput);
  const setNewTaskInput = useBoardStore((state) => state.setNewTaskInput);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="form"
          className="relative z-10"
          open={isOpen}
          onClose={() => closeModal}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25"></div>
              </Transition.Child>
            </div>
          </div>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                // as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 pb-2"
                  >
                    {" "}
                    Add a task
                  </Dialog.Title>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={newTaskInput}
                      onChange={(e) => setNewTaskInput(e.target.value)}
                      placeholder="Enter a task here"
                      className="w-full border border-gray-300 rounded-md outline-none p-5"
                    />
                  </div>
                  {/**Radio btn grp */}
                  <TaskTypeRadioGroup />
                  <span className="font-extrabold bg-red-400 text-center">
                    Feature Still in progress..... Complete very sooooooooooon
                  </span>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
