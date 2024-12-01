"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    return router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl mt-5 mx-auto  border border-gray-200 px-5 py-3 rounded-full hover:shadow-lg focus-within:shadow-md transition-shadow items-center"
      >
        <AiOutlineSearch className="mr-3 text-gray-500text-lg" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col items-center justify-center mt-8 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row">
        <button
          onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-300 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:shadow-sm disabled:opacity-80 disabled:text-blue-500"
        >
          {randomSearchLoading ? "Loading...." : "I am Felling Lucky"}
        </button>
      </div>
    </>
  );
}
