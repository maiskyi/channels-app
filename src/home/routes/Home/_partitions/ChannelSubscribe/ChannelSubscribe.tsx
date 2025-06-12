import { memo } from 'react';

import { Box, Card, Icon, Typography } from '@core/uikit';
import { useTranslation } from '@core/i18n';
import { Link } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

export const ChannelSubscribe = memo(function FablesCreate() {
  const { t } = useTranslation();

  return (
    <Link pathname={RoutePath.Search} unstyled>
      <Card color="horizontal">
        <Card.Content>
          <Box alignItems="center" display="flex" gap={12}>
            <Box display="flex" flex={0}>
              <Icon fontSize={28} name="send" />
            </Box>
            <Box display="flex" flex={1} flexDirection="column" gap={4}>
              <Typography variant="body-2" weight="semi-bold">
                {t('actions.subscribeToChannel')}
              </Typography>
              <Typography variant="body-4">{t('intro.home')}</Typography>
            </Box>
            <Box display="flex" flex={0}>
              <Icon fontSize={24} name="chevron-right" />
            </Box>
          </Box>
        </Card.Content>
      </Card>
    </Link>
  );
});
