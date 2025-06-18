import { FC, PropsWithChildren } from 'react';
import { merge } from 'lodash';

import {
  ApiProvider,
  ApiProviderProps,
  OnRequestFulfilledCallback,
} from '@network/api';
import { useRawInitData } from '@core/telegram';

export type NetworkProps = PropsWithChildren<{
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, api }) => {
  const initDataRaw = useRawInitData();

  const handleOnRequestFulfilled: OnRequestFulfilledCallback = (req) => {
    return merge(req, {
      headers: {
        Authorization: `Tma ${initDataRaw}`,
      },
    });
  };

  return (
    <ApiProvider {...api} onRequestFulfilled={handleOnRequestFulfilled}>
      {children}
    </ApiProvider>
  );
};
