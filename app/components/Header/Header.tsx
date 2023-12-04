'use client';

import Image from 'next/image';
import Logo from '../../assets/icons/logo.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import { useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-my_team_green_600">
      <div className="flex justify-between items-center p-12">
        <Image src={Logo} alt="myteam" loading="eager" />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle mobile menu">
          <Image src={MenuIcon} alt="" loading="eager" />
        </button>
      </div>
      {isMenuOpen && <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};
