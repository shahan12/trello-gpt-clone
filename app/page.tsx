"use client";
import Board from "@/components/board";
import Header from "@/components/header";
import Modal from "@/components/Modal";
import { useModalStore } from "@/store/ModalStore";
import Image from "next/image";
import { useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Home() {
  const closeModal = useModalStore((state) => state.closeModal);
  const isOpen = useModalStore((state) => state.isOpen);

  const modalRef = useRef(null);
  useEffect(() => {
    // Event handler for outside clicks
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(); // Close the modal if the click is outside
      }
    };

    // Attach event listener to document
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup event listener on unmount or when modal closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  return (
    <main>
      <Header />
      <Board />
      {isOpen && (
        <div ref={modalRef}>
          <Modal />
        </div>
      )}
    </main>
  );
}
