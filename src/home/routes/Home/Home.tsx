import { FC } from 'react';
import { get } from 'lodash';

import {
  Content,
  Grid,
  Header,
  InfiniteScroll,
  Page,
  Skeleton,
  useViewWillEnter,
} from '@core/uikit';
import { useGetChannelsInfinite } from '@network/api';
import { ChannelCard } from '@common/components';
import { Link } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/i18n';

import { ChannelSubscribe } from './_partitions/ChannelSubscribe';
import { INITIAL_DATA } from './Home.const';

export const Home: FC = () => {
  const { t } = useTranslation();

  const { isLoading, data, hasNextPage, fetchNextPage, refetch } =
    useGetChannelsInfinite(
      {
        take: 25,
      },
      {
        query: {
          getNextPageParam: ({ total }, all) => {
            const count = all.flatMap(({ data }) => data).length;
            return count < total ? all.length * 25 : undefined;
          },
        },
      }
    );

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
          <Grid>
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
                    params={{ id: item.id }}
                    pathname={RoutePath.Channel}
                    unstyled
                  >
                    <ChannelCard item={item} />
                  </Link>
                );
              })}
            </Skeleton>
          </Grid>
        </InfiniteScroll>
      </Content>
    </Page>
  );
};
