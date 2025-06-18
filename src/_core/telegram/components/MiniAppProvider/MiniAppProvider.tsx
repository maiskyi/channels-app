import { FC, PropsWithChildren } from 'react';

export type MiniAppProviderProps = PropsWithChildren<{}>;

export const MiniAppProvider: FC<MiniAppProviderProps> = ({ children }) => {
  return <>{children}</>;
};
