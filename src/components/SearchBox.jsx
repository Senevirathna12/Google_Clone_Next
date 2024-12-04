"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function SearchBox() {
    
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const [term,setTerm] = useState(searchTerm|| '');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`)
    }
    
  return (
    <form onSubmit={handleSubmit} className="flex items-center flex-grow max-w-3xl px-6 py-2 my-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
        <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} className="w-full focus:outline-none"/>
        <RxCross2 onClick={()=> setTerm('')} className="text-2xl text-gray-500 cursor-pointer sm:mr-2"/>
        <BsFillMicFill className="hidden pl-2 mr-3 text-3xl text-blue-500 border-l-2 sm:inline-flex"/>
        <AiOutlineSearch onClick={handleSubmit} className="hidden text-2xl text-blue-500 cursor-pointer sm:inline-flex"/>
    </form>
  )
}
