"use client";
import fetchSuggestion from "@/lib/fetchSuggestion";
import { useBoardStore } from "@/store/boardStore";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

function Header() {
  const searchString = useBoardStore((state) => state.searchString);
  const setSearchString = useBoardStore((state) => state.setSearchString);
  const board = useBoardStore((state) => state.board);
  const [loading, setLoading] = useState<boolean>(true);
  const [suggestion, setSuggestion] = useState<String>("");
  useEffect(() => {
    if (board.columns.size === 0) return;
    setLoading(true);
    const fetchSugesstionFunc = async () => {
      const suggestion = await fetchSuggestion(board);
      setTimeout(() => {
        setSuggestion(suggestion);
        setLoading(false);
      }, 500);
    };

    fetchSugesstionFunc();
  }, [board]);

  return (
    <header className="">
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl ">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/**Search Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button hidden={true}>Search</button>
          </form>
          <Avatar name="Shahan Khan" round color="#0055D1" size="50" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5  shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon
            className={`inline-block  h-10 w-10 text-[#0055D1] mr-1${
              loading ? "animate-spin" : ""
            } `}
          />
          {suggestion && !loading
            ? suggestion
            : "Getting summary from Open API"}
        </p>
      </div>
    </header>
  );
}

export default Header;
