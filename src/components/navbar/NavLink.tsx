import Link from "next/link";

export const NavLink = () => {
  return (
    <>
      <Link
        href="/"
        className="sm:px-4 sm:py-2 px-5 py-6 sm:hover:text-gray-400  text-4xl sm:text-lg border-t-1  border-b-1 sm:border-0 border-gray-600 "
      >
        HOME
      </Link>
      <Link
        href="/about"
        className="sm:px-4 sm:py-2 px-5 py-6 sm:hover:text-gray-400  text-4xl sm:text-lg border-b-1 sm:border-0 border-gray-600"
      >
        ABOUT
      </Link>
      <Link
        href="/reserve"
        className="sm:px-4 sm:py-2 px-5 py-6 bg-violet-400   sm:hover:bg-black sm:hover:text-white text-4xl sm:text-lg border-b-1 sm:border-0 border-gray-600 text-white sm:text-black"
      >
        RESERVE YOUR SPOT
      </Link>
    </>
  );
};
