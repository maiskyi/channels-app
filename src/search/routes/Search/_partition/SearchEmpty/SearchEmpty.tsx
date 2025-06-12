import { FC } from 'react';

import { useTranslation } from '@core/i18n';
import { Banner, Box, Grid } from '@core/uikit';

export const SearchEmpty: FC = () => {
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
          <Banner.Icon icon="search" />
          <Banner.Title>{t('empty.noSearchResults.title')}</Banner.Title>
          <Banner.Description>
            {t('empty.noSearchResults.description')}
          </Banner.Description>
        </Banner>
      </Box>
    </Grid.Row>
  );
};
