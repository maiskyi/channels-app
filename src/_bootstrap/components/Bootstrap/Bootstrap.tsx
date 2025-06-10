import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';

type BootstrapProps = PropsWithChildren;

export const Bootstrap: FC<BootstrapProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
