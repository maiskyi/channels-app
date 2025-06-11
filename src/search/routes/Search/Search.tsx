import { FC, useState } from 'react';
import { get } from 'lodash';

import { Content, Grid, Header, Page, Searchbar, Skeleton } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useChannelsSearch } from '@network/api';
import { ChannelCard } from '@common/components';
import { Link } from '@core/navigation';
import { useTranslation } from '@core/i18n';

import { INITIAL_DATA } from './Search.const';

export const Search: FC = () => {
  const [query, setQuery] = useState<string | undefined>();
  const { t } = useTranslation();

  const { isLoading, data } = useChannelsSearch(
    {
      query,
    },
    {
      query: {
        enabled: !!query,
      },
    }
  );

  const channels = get(data, ['data'], INITIAL_DATA);

  return (
    <Page>
      <Header
        subheader={
          <Searchbar
            onChange={({ value }) => setQuery(value)}
            placeholder="@username, https://link, etc"
            value={query}
          />
        }
      >
        <Header.Back pathname={RoutePath.Index} />
        <Header.Title>{t('pages.search')}</Header.Title>
      </Header>
      <Content>
        <Skeleton isLoading={isLoading}>
          <Grid>
            {!!query &&
              channels.map((item) => {
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
