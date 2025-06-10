import { FC } from 'react';

import { Content, Grid, Header, Page } from '@core/uikit';

export const Home: FC = () => {
  const title = 'My Channels';

  return (
    <Page>
      <Header translucent>
        <Header.Title>123</Header.Title>
      </Header>
      <Content>
        <Grid>
          <Grid.Row flex="0 0 auto">
            <Grid.Cell>
              <Header collapse="condense">
                <Header.Title size="large">{title}</Header.Title>
              </Header>
            </Grid.Cell>
          </Grid.Row>
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
