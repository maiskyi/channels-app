import { FC } from 'react';
import classNames from 'classnames';

import { Color } from '@ionic/core';

import { Shade } from '../../Shade';
import { IconName, Icon } from '../../Icon';

import styles from '../Banner.module.scss';

interface BannerIconProps {
  icon?: IconName;
  color?: Color;
}

export const BannerIcon: FC<BannerIconProps> = ({ icon }) => {
  return (
    <div className={styles['icon-wrapper']}>
      <Shade size="sm" />
      <div className={classNames(styles.icon, styles.withIcon)}>
        <Icon name={icon} />
      </div>
    </div>
  );
};
