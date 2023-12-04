import Image from 'next/image';
import Link from 'next/link';

import './MobileMenu.css';

import CloseIcon from '../../assets/icons/close-icon.svg';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  return (
    <nav className={`text-white ${isMenuOpen ? 'w-[15.9375rem] px-12 pt-28' : 'w-0 opacity-0'} h-screen right-0 top-0 fixed z-10`}>
      <button aria-label="Close mobile menu" className="absolute top-14 right-6" onClick={() => setIsMenuOpen(false)}>
        <Image src={CloseIcon} alt="" className="w-[1.125rem] h-[1.0625rem]" />
      </button>
      <ul>
        <li className="mb-6">
          <Link href="/">home</Link>
        </li>
        <li className="mb-9">
          <Link href="/about">about</Link>
        </li>
        <li className="border-2 border-white rounded-3xl text-center py-2">
          <Link href="/contact">contact us</Link>
        </li>
      </ul>
    </nav>
  );
};
