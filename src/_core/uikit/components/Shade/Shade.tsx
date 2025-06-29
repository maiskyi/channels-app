import { CSSProperties, FC } from 'react';
import classNames from 'classnames';

import { ShadeBackground } from './Shade.types';

import styles from './Shade.module.scss';

export interface ShadeProps {
  background?: ShadeBackground;
  top?: CSSProperties['top'];
  size?: 'sm';
}

export const Shade: FC<ShadeProps> = ({
  background = 'lavender-indigo',
  top,
  size,
}) => {
  return (
    <div
      className={classNames(styles.root, styles[background], styles[size])}
      style={{ top }}
    />
  );
};
