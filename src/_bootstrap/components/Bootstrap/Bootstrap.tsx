import { FC, PropsWithChildren } from "react";

type BootstrapProps = PropsWithChildren;

export const Bootstrap: FC<BootstrapProps> = ({ children }) => {
  return <>{children}</>;
};
