import { createElement, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { Color } from '@ionic/core';
import { IonSkeletonText } from '@ionic/react';

import { SkeletonContext } from '../../contexts/SkeletonContext';

import { TypographyVariant, TypographyWeight } from './Typography.types';
import { TYPOGRAPHY_TAG_MAPPING } from './Typography.const';

import styles from './Typography.module.scss';

export type TypographyProps = PropsWithChildren<{
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  className?: string;
  muted?: boolean;
  color?: Color;
}>;

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  muted,
  color,
  variant = 'body-1',
  weight = 'regular',
}) => {
  const isLoading = useContextSelector(
    SkeletonContext,
    ({ isLoading }) => isLoading
  );

  if (isLoading) {
    return (
      <IonSkeletonText
        animated
        className={classNames(styles.skeleton, styles[variant])}
      />
    );
  }

  return createElement(
    TYPOGRAPHY_TAG_MAPPING[variant],
    {
      className: classNames(
        styles.default,
        styles[variant],
        styles[weight],
        styles[color],
        {
          [styles.muted]: muted,
        },
        className
      ),
    },
    children
  );
};
