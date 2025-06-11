import { FC } from 'react';
import { get } from 'lodash';

import { Content, Grid, Header, Page, Skeleton } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useChannelsSearch } from '@network/api';
import { ChannelCard } from '@common/components';
import { Link } from '@core/navigation';

import { INITIAL_DATA } from './Search.const';

export const Search: FC = () => {
  const { isLoading, data } = useChannelsSearch({
    query: 'news',
  });

  const channels = get(data, ['data'], INITIAL_DATA);

  return (
    <Page>
      <Header>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Skeleton isLoading={isLoading}>
          <Grid>
            {channels.map((item) => {
              return (
                <Grid.Row flex="0 0 auto" key={item.id}>
                  <Grid.Cell>
                    <Link
                      params={{ id: item.id }}
                      pathname={RoutePath.Channel}
                      unstyled
                    >
                      <ChannelCard item={item} />
                    </Link>
                  </Grid.Cell>
                </Grid.Row>
              );
            })}
          </Grid>
        </Skeleton>
      </Content>
    </Page>
  );
};
