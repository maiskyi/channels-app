import { FC } from 'react';

import { Content, Grid, Header, Page } from '@core/uikit';

export const Home: FC = () => {
  return (
    <Page>
      <Header>
        <Header.Title>My Channels</Header.Title>
      </Header>
      <Content>
        <Grid>
          <Grid.Row flex="0 0 auto">
            <Grid.Cell>
              {/* <FablesCreate onClick={handleOnCreateClick} /> */}
            </Grid.Cell>
          </Grid.Row>
        </Grid>
      </Content>
    </Page>
  );
};
