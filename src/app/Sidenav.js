import React from 'react';
import { Navigation } from 'baseui/side-navigation';

import { PATH as HOME_PAGE_PATH } from '../home/HomePage';
import { PATH as MOVIES_PAGE_PATH } from '../movies/MoviesPage';

const Sidenav = () => {

  return (
    <Navigation
      items={[
        {
          title: 'Home',
          itemId: HOME_PAGE_PATH,
        },
        {
          title: 'Filmes',
          itemId: MOVIES_PAGE_PATH,

        }   
      ]}

      overrides={{
        NavItem: {
          style: ({ $active }) => ({
            backgroundColor: $active ? 'rgba(255, 255, 255, .15)' : 'inherit',
            backgroundImage: 'none',
          }),
        },
      }}
    />
  );
};

export default Sidenav;
