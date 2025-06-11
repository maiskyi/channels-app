import { createContext } from 'use-context-selector';

interface SkeletonContextProps {
  isLoading: boolean;
}

export const SkeletonContext = createContext<SkeletonContextProps>({
  isLoading: false,
});
