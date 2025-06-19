import { FC } from 'react';
import { get } from 'lodash';

import {
  Content,
  Grid,
  Header,
  InfiniteScroll,
  Page,
  SafeArea,
  Skeleton,
  useViewWillEnter,
} from '@core/uikit';
import { useGetChannelsInfinite } from '@network/api';
import { ChannelCard } from '@common/components';
import { Link } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/i18n';

import { ChannelSubscribe } from './_partitions/ChannelSubscribe';
import { ChannelsEmpty } from './_partitions/ChannelsEmpty';
import { TAKE, INITIAL_DATA } from './Home.const';

export const Home: FC = () => {
  const { t } = useTranslation();

  const { isLoading, data, hasNextPage, fetchNextPage, refetch } =
    useGetChannelsInfinite(
      {
        take: TAKE,
      },
      {
        query: {
          getNextPageParam: ({ total }, all) => {
            const count = all.flatMap(({ data }) => data).length;
            return count < total ? all.length * TAKE : undefined;
          },
        },
      }
    );

  const total = get(data, ['pages', 0, 'total'], INITIAL_DATA.total);

  const channels = get(data, ['pages'], [INITIAL_DATA]).flatMap(
    ({ data }) => data
  );

  useViewWillEnter(() => {
    refetch();
  });

  return (
    <Page>
      <Header translucent>
        <Header.Title>{t('pages.home')}</Header.Title>
      </Header>
      <Content>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          <SafeArea
            display="flex"
            flexDirection="column"
            minHeight="100%"
            safe={['bottom']}
          >
            <Grid>
              <Grid.Row flex="0 0 auto">
                <Grid.Cell>
                  <Header collapse="condense">
                    <Header.Title size="large">{t('pages.home')}</Header.Title>
                  </Header>
                </Grid.Cell>
              </Grid.Row>
              <Grid.Row flex="0 0 auto">
                <Grid.Cell>
                  <ChannelSubscribe />
                </Grid.Cell>
              </Grid.Row>
              <Skeleton isLoading={isLoading}>
                {channels.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      params={{ id: item.userName }}
                      pathname={RoutePath.Channel}
                      unstyled
                    >
                      <ChannelCard item={item} />
                    </Link>
                  );
                })}
                {!total && <ChannelsEmpty />}
              </Skeleton>
            </Grid>
          </SafeArea>
        </InfiniteScroll>
      </Content>
    </Page>
  );
};
