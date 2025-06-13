import { FC } from 'react';

import { Content, Header, Page, Skeleton } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useGetChannel } from '@network/api';
import { useRoute } from '@core/navigation';

export const Channel: FC = () => {
  const [{ params }] = useRoute<{ id: string }>();

  const { isLoading } = useGetChannel(params.id);

  return (
    <Page>
      <Skeleton isLoading={isLoading}>
        <Header>
          <Header.Back pathname={RoutePath.Index} />
        </Header>
        <Content>123</Content>
      </Skeleton>
    </Page>
  );
};
