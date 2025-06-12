import { FC, useState } from 'react';
import { get } from 'lodash';

import {
  Content,
  Grid,
  Header,
  Page,
  SafeArea,
  Searchbar,
  Skeleton,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useChannelsSearch } from '@network/api';
import { useTranslation } from '@core/i18n';

import { INITIAL_DATA } from './Search.const';
import { SearchList } from './_partition/SearchList';
import { SearchPrompt } from './_partition/SearchPrompt';

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
            autoFocus
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
          <SafeArea
            display="flex"
            flexDirection="column"
            minHeight="100%"
            safe={['bottom']}
          >
            <Grid>
              {!query && <SearchPrompt />}
              {!!query && channels.length && <SearchList data={channels} />}
            </Grid>
          </SafeArea>
        </Skeleton>
      </Content>
    </Page>
  );
};
