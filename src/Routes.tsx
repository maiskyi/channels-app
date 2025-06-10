import { FC } from 'react';

import { RoutePath } from '@bootstrap/constants';
import { Route, RouterOutlet, Router } from '@core/navigation';

import { Home } from './home/routes';

export const Routes: FC = () => {
  return (
    <Router>
      <RouterOutlet>
        <Route exact path={RoutePath.Index}>
          <Home />
        </Route>
      </RouterOutlet>
    </Router>
  );
};
