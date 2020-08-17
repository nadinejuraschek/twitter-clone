import React from 'react';

// COMPONENTS
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

// HOOKS
import useWindowSize from '../../hooks/useWindowSize';

const Navbar = () => {
  const size = useWindowSize();

  return (
    <>
    {
      size.width < 600
      ?
      <MobileNav />
      :
      <DesktopNav />
    }
    </>
  );
};

export default Navbar;
