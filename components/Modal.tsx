"use client";
import { useModalStore } from "@/store/ModalStore";
import {
  Checkbox,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
} from "@headlessui/react";
import { useState } from "react";

function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <>
      <Dialog
        as="form"
        className="relative z-10"
        open={isOpen}
        onClose={() => closeModal}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle>Deactivate account</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>

            {/*
          You can render additional buttons to dismiss your
          dialog by setting `isOpen` to `false`.
        */}
            <button onClick={closeModal}>Cancel</button>
            <button>ADD</button>
          </DialogPanel>
          {/* ... */}
        </div>
      </Dialog>
    </>
  );
}

export default Modal;
