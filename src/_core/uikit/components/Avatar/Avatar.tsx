import { FC, Fragment } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { IonAvatar, IonIcon, IonSkeletonText } from '@ionic/react';

import { ICON, IconName } from '../Icon';
import { SkeletonContext } from '../../contexts/SkeletonContext';

import styles from './Avatar.module.scss';

export interface AvatarProps {
  src?: string;
  icon?: IconName;
  className?: string;
  border?: boolean;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({
  src,
  icon,
  className,
  border,
  size = 48,
}) => {
  const isLoading = useContextSelector(
    SkeletonContext,
    ({ isLoading }) => isLoading
  );

  const content = (() => {
    if (isLoading) return <IonSkeletonText animated />;
    const img = src ? <img alt="" src={src} /> : null;
    const ico = icon ? (
      <IonIcon icon={ICON[icon]} style={{ fontSize: 24 }} />
    ) : null;
    return <Fragment>{img || ico}</Fragment>;
  })();

  return (
    <IonAvatar
      className={classNames(
        styles.root,
        {
          [styles.border]: border,
          [styles.withIcon]: !!icon,
        },
        className
      )}
      style={{ height: size, width: size }}
    >
      {content}
    </IonAvatar>
  );
};
