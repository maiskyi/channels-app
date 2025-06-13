import { FC } from 'react';

import {
  Box,
  Button,
  Card,
  Content,
  Footer,
  Grid,
  Header,
  Page,
  SafeArea,
  Skeleton,
  Typography,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useGetChannel } from '@network/api';
import { Link, useRoute } from '@core/navigation';
import { useTranslation } from '@core/i18n';
import { ChannelCard } from '@common/components';

import { ChannelInfo } from './_partitions/ChannelInfo';
import { INITIAL_DATA } from './Channel.const';

export const Channel: FC = () => {
  const { t } = useTranslation();
  const [{ params }] = useRoute<{ id: string }>();

  const {
    isLoading,
    isFetching,
    data = INITIAL_DATA,
  } = useGetChannel(params.id);

  return (
    <Page>
      <Skeleton isLoading={isLoading}>
        <Header>
          <Header.Back pathname={RoutePath.Index} />
        </Header>
        <Content>
          <SafeArea safe={['bottom']}>
            <Grid>
              <Grid.Row>
                <Grid.Cell>
                  <ChannelInfo {...data} />
                </Grid.Cell>
              </Grid.Row>
              <Grid.Row>
                <Grid.Cell>
                  <Box marginTop={32} paddingInline={20}>
                    <Typography variant="h4" weight="semi-bold">
                      {t('forms.about')}
                    </Typography>
                  </Box>
                </Grid.Cell>
              </Grid.Row>
              <Grid.Row>
                <Grid.Cell>
                  <Card>
                    <Card.Content>
                      <Box display="flex" flexDirection="column" gap={4}>
                        <Typography
                          preLine
                          truncate={isLoading ? 3 : undefined}
                        >
                          {data.about}
                        </Typography>
                      </Box>
                    </Card.Content>
                  </Card>
                </Grid.Cell>
              </Grid.Row>
              <Grid.Row>
                <Grid.Cell>
                  <Box marginTop={48} paddingInline={20}>
                    <Typography variant="h4" weight="semi-bold">
                      {t('forms.otherRecommendedChannels')}
                    </Typography>
                  </Box>
                </Grid.Cell>
              </Grid.Row>
              {data.recommendations.map((item) => {
                return (
                  <Grid.Row key={item.id}>
                    <Grid.Cell>
                      <Link
                        params={{ id: item.userName }}
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
          </SafeArea>
        </Content>
        <Footer>
          <Button
            color={data.isSubscribed ? 'secondary' : 'primary'}
            loading={isFetching}
          >
            {t(data.isSubscribed ? 'actions.unsubscribe' : 'actions.subscribe')}
          </Button>
        </Footer>
      </Skeleton>
    </Page>
  );
};
