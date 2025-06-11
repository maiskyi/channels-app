import { FC, PropsWithChildren } from 'react';

import { SkeletonContext } from '../../contexts/SkeletonContext';

export type SkeletonProps = PropsWithChildren<{
  isLoading: boolean;
}>;

export const Skeleton: FC<SkeletonProps> = ({ children, isLoading }) => {
  return (
    <SkeletonContext.Provider value={{ isLoading }}>
      {children}
    </SkeletonContext.Provider>
  );
};
