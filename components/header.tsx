"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div>
          {/**Search Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" className="flex-1 outline-none p-2" />
            <button hidden={true}>Search</button>
          </form>
          <Avatar name = 'Shahan Khan' round color="#0055D1" size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
