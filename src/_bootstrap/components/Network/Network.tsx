import { FC, PropsWithChildren } from 'react';
import { merge } from 'lodash';

import {
  ApiProvider,
  ApiProviderProps,
  OnRequestFulfilledCallback,
} from '@network/api';
// import { useRawInitData } from '@core/telegram';

import { DEV } from './Network.const';

export type NetworkProps = PropsWithChildren<{
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, api }) => {
  // const initDataRaw = useRawInitData();
  // console.log(initDataRaw);

  const handleOnRequestFulfilled: OnRequestFulfilledCallback = (req) => {
    return merge(req, {
      headers: {
        // 'x-init-data-raw': initDataRaw,
        'x-init-data-raw': DEV,
      },
    });
  };

  return (
    <ApiProvider {...api} onRequestFulfilled={handleOnRequestFulfilled}>
      {children}
    </ApiProvider>
  );
};
