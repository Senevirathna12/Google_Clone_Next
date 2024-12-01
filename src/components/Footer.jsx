import CountryLooup from "./CountryLooup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-sm text-gray-500 bg-[#f2f2f2]">
      <div className="px-8 py-3 border-b">
        <CountryLooup />
      </div>
      <div className="flex flex-col items-center justify-between px-8 py-3 space-y-7 sm:flex-row sm:space-y-0">
        <ul className="flex items-center space-x-6 ">
          <li className="cursor-pointer hover:underline"> About</li>
          <li className="cursor-pointer hover:underline"> Advertising</li>
          <li className="cursor-pointer hover:underline"> Business</li>
          <li className="cursor-pointer hover:underline"> How Search work</li>
        </ul>
        <ul className="flex items-center space-x-6 ">
          <li className="cursor-pointer hover:underline"> Privacy</li>
          <li className="cursor-pointer hover:underline"> Terms</li>
          <li className="cursor-pointer hover:underline"> Settings</li>
        </ul>
      </div>
    </footer>
  );
}
