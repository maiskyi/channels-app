import { FC, PropsWithChildren } from 'react';

import { MiniAppProvider } from '@core/telegram';

type MiniAppProps = PropsWithChildren<{}>;

export const MiniApp: FC<MiniAppProps> = ({ children }) => {
  return <MiniAppProvider>{children}</MiniAppProvider>;
};
