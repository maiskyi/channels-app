import { FC } from 'react';

import { Content, Grid, Header, Page } from '@core/uikit';

import { ChannelSubscribe } from './_partitions/ChannelSubscribe';

export const Home: FC = () => {
  return (
    <Page>
      <Header translucent>
        <Header.Title>My Channels</Header.Title>
      </Header>
      <Content>
        <Grid>
          <Grid.Row flex="0 0 auto">
            <Grid.Cell>
              <ChannelSubscribe />
            </Grid.Cell>
          </Grid.Row>
        </Grid>
      </Content>
    </Page>
  );
};
