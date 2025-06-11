import { FC, PropsWithChildren } from 'react';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';

import { stringify } from '../../utils/queryString';

import styles from './Link.module.scss';

export type LinkParams = PropsWithChildren<{
  pathname: string;
  params?: object;
  search?: object;
  unstyled?: boolean;
}>;

export const Link: FC<LinkParams> = ({
  pathname,
  params,
  children,
  search,
  unstyled,
}) => {
  return (
    // @ts-ignore
    <RouterLink
      className={classNames(styles.root, {
        [styles.unstyled]: unstyled,
      })}
      to={{
        pathname: generatePath(pathname, params),
        search: stringify(search),
      }}
    >
      {children}
    </RouterLink>
  );
};
