import Link from 'next/link';
interface NavLinkProps {
  setMenuOpen?: (open: boolean) => void;
}

export const NavLink = ({ setMenuOpen }: NavLinkProps) => {
  const handleClick = () => {
    if (setMenuOpen) setMenuOpen(false);
  };

  return (
    <>
      <Link
        href="/"
        className="sm:px-4 sm:py-2 px-2 py-6 sm:hover:text-gray-400  text-4xl sm:text-lg border-t-1  border-b-1 sm:border-0 border-gray-600 "
        onClick={() => handleClick()}
      >
        HOME
      </Link>
      <Link
        href="/about"
        className="sm:px-4 sm:py-2 px-2 py-6 sm:hover:text-gray-400  text-4xl sm:text-lg border-b-1 sm:border-0 border-gray-600"
        onClick={() => handleClick()}
      >
        ABOUT
      </Link>
      <Link
        href="/reserve"
        className="sm:px-4 sm:py-2 px-2 py-6 bg-violet-400   sm:hover:bg-black sm:hover:text-white text-4xl sm:text-lg border-b-1 sm:border-0 border-gray-600 text-white sm:text-black"
        onClick={() => handleClick()}
      >
        RESERVE YOUR SPOT
      </Link>
    </>
  );
};
