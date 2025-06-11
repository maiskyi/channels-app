import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';

import { Network, NetworkProps } from '../Network';

export type BootstrapProps = PropsWithChildren<{
  network: NetworkProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({ children, network }) => {
  return (
    <ThemeProvider>
      <Network {...network}>{children}</Network>
    </ThemeProvider>
  );
};
