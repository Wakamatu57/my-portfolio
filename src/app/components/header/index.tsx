'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#skill', label: 'SKILLS' },
    { href: '#license', label: 'CERTIFICATIONS' },
    { href: '#project', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <header className="w-full py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white fixed top-0 left-0 z-50">
      <div className="mx-auto flex justify-between items-center px-6">
        <h1 className="text-sm md:text-lg font-bold tracking-widest">
          <Link href="#" className="hover:text-gray-300 transition">
            WAKAMATU
          </Link>
        </h1>

        {/* デスクトップ用ナビ */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm md:text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gray-300 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ハンバーガーボタン（モバイルのみ） */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="メニューを開く"
        >
          <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* モバイル用ドロップダウン */}
      {isOpen && (
        <nav className="md:hidden mt-4 px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
