import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex items-center space-x-4 ">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="p-2 text-4xl bg-transparent rounded-full hover:bg-gray-200" />
        <button className="px-6 py-2 text-white transition-shadow bg-blue-700 rounded-3xl hover:brightness-105 hover:shadow-md">
          Sign in
        </button>
      </div>
    </header>
  );
}
