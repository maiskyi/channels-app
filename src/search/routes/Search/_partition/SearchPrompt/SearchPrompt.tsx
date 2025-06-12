import { FC } from 'react';

import { useTranslation } from '@core/i18n';
import { Banner, Box, Grid } from '@core/uikit';

export const SearchPrompt: FC = () => {
  const { t } = useTranslation();
  return (
    <Grid.Row flex="1">
      <Box
        alignItems="center"
        display="flex"
        flex={1}
        justifyContent="center"
        minHeight="100%"
      >
        <Banner>
          <Banner.Image asset="two-robots" />
          <Banner.Title>{t('empty.noFables.title')}</Banner.Title>
          <Banner.Description>
            {t('empty.noFables.description')}
          </Banner.Description>
        </Banner>
      </Box>
    </Grid.Row>
  );
};
