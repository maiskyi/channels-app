import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';
import { QueryProvider } from '@network/core';
import { LocalizationProvider, LocalizationProviderProps } from '@core/i18n';

import { Network, NetworkProps } from '../Network';

export type BootstrapProps = PropsWithChildren<{
  network: NetworkProps;
  localization: LocalizationProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  children,
  network,
  localization,
}) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <LocalizationProvider {...localization}>
          <Network {...network}>{children}</Network>
        </LocalizationProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
