import { FC } from 'react';

import { RoutePath } from '@bootstrap/constants';
import { Route, RouterOutlet, Router } from '@core/navigation';

import { Home } from './home/routes';
import { Search } from './search/routes';

export const Routes: FC = () => {
  return (
    <Router>
      <RouterOutlet>
        {/* @ts-ignore */}
        <Route exact path={RoutePath.Index}>
          <Home />
        </Route>
        {/* @ts-ignore */}
        <Route exact path={RoutePath.Search}>
          <Search />
        </Route>
      </RouterOutlet>
    </Router>
  );
};
