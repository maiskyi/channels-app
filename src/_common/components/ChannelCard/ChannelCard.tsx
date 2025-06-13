import { FC } from 'react';

import { Avatar, Box, Card, Typography } from '@core/uikit';
import { DTO } from '@network/api';

interface ChannelCardProps {
  item: DTO.ChannelItem;
}

export const ChannelCard: FC<ChannelCardProps> = ({ item }) => {
  const { title, photo, userName } = item;

  return (
    <Card>
      <Card.Content>
        <Box display="flex" gap={16}>
          <Avatar border={!photo} icon="send" src={photo} />
          <Box display="flex" flex={1} flexDirection="column">
            <Typography>{title}</Typography>
            <Typography muted variant="body-2">
              @{userName}
            </Typography>
          </Box>
        </Box>
      </Card.Content>
    </Card>
  );
};
