import React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

const Navbar = () => {
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            height: $theme.navbarHeight,
            backgroundColor: '#FFFFFF',
          }),
        },
      }}
    >
      <NavigationList $align={ALIGN.left} />
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right} />
      <NavigationList $align={ALIGN.right} />
    </HeaderNavigation>
  );
};

export default Navbar;
