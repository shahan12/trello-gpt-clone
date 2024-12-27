import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Modal from "@/components/Modal";
import { useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useModalStore } from "@/store/ModalStore";

export const metadata: Metadata = {
  title: "Trollo Clone GPT ",
  description: "Generated Shahan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">
        {children}
        <Modal />
      </body>
    </html>
  );
}
