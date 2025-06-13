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
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/i18n';

import { ChannelCard } from './_partitions/ChannelCard';
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
                  <ChannelCard {...data} />
                </Grid.Cell>
              </Grid.Row>
              <Grid.Row>
                <Grid.Cell>
                  <Box marginTop={32}>
                    <Card>
                      <Card.Content>
                        <Box display="flex" flexDirection="column" gap={4}>
                          <Typography weight="bold">About</Typography>
                          <Typography
                            preLine
                            truncate={isLoading ? 3 : undefined}
                          >
                            {data.about}
                          </Typography>
                        </Box>
                      </Card.Content>
                    </Card>
                  </Box>
                </Grid.Cell>
              </Grid.Row>
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
