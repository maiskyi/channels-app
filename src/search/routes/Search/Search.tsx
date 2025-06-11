import { FC } from 'react';

import { Content, Header, Page } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';

export const Search: FC = () => {
  return (
    <Page>
      <Header>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>123</Content>
    </Page>
  );
};
