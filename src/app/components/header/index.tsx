import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-4xl font-bold tracking-wider">
          <Link href="#" className="hover:text-gray-300 transition">
            TOP
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link href="#works" className="hover:text-gray-300 transition">
                WORKS
              </Link>
            </li>
            <li>
              <Link href="#skill" className="hover:text-gray-300 transition">
                SKILL
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
