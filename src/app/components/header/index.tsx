import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white fixed top-0 left-0 z-50">
      {' '}
      <div className="mx-auto flex justify-between items-center px-6">
        {/* h1は左寄せ */}
        <h1 className="text-xs sm:text-sm md:text-lg">
          <Link href="#" className="hover:text-gray-300 transition">
            TOP
          </Link>
        </h1>

        {/* navは右寄せ */}
        <nav>
          <ul className="flex space-x-8 text-xs sm:text-sm md:text-lg">
            <li>
              <Link href="#skill" className="hover:text-gray-300 transition">
                SKILLS
              </Link>
            </li>
            <li>
              <Link href="#license" className="hover:text-gray-300 transition">
                CERTIFICATIONS
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300 transition">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
