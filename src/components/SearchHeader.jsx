import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { TbGridDots } from "react-icons/tb";
import { RiSettings3Line } from "react-icons/ri";

export default function SearchHeader() {
  return (
    <header className="static top-0 bg-white">
      <div className="flex items-center justify-between w-full p-6">
        <Link href={"/"}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt="Google Logo"
            width={120}
            height={40}
            priority
            style={{ width: "auto" }}
          />
        </Link>
        <div className="flex-1">
            <SearchBox/>
        </div>
        <div className="hidden space-x-2 md:inline-flex">
            <RiSettings3Line className="p-2 text-4xl bg-transparent rounded-full cursor-pointer hover:bg-gray-200"/>
            <TbGridDots className="p-2 text-4xl bg-transparent rounded-full cursor-pointer hover:bg-gray-200"/>
        </div>
        <button className="px-6 py-2 ml-2 text-white transition-shadow bg-blue-700 rounded-3xl hover:brightness-105 hover:shadow-md">
          Sign in
        </button>
      </div>
    </header>
  );
}
