import { memo } from 'react';

import { Box, Avatar, Typography } from '@core/uikit';
import { DTO } from '@network/api';

export const ChannelCard = memo<DTO.GetChannelResponse>(
  function ProfileUserCard({ title, username, photo }) {
    return (
      <Box paddingInline={20} paddingTop={130} position="relative">
        <Box
          backgroundColor="#020202"
          backgroundImage="repeating-linear-gradient(45deg, #161616 25%, transparent 25%, transparent 75%, #161616 75%, #161616), repeating-linear-gradient(45deg, #161616 25%, #020202 25%, #020202 75%, #161616 75%, #161616)"
          backgroundPosition="0 0, 10px 10px"
          backgroundSize="20px 20px"
          height={172}
          left={0}
          opacity={0.8}
          position="absolute"
          right={0}
          top={0}
        />
        <Box
          alignItems="end"
          display="flex"
          justifyContent="space-between"
          position="relative"
        >
          <Avatar border={!photo} icon="send" size={84} src={photo} />
        </Box>
        <Box display="flex" flexDirection="column" gap={4} marginTop={20}>
          <Typography variant="body-1" weight="medium">
            {title}
          </Typography>
          <Typography variant="body-3">@{username}</Typography>
        </Box>
      </Box>
    );
  }
);
