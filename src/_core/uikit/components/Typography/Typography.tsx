import { createElement, FC, Fragment, PropsWithChildren } from 'react';
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
  truncate?: number;
  preLine?: boolean;
}>;

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  muted,
  color,
  variant = 'body-1',
  weight = 'regular',
  truncate,
  preLine,
}) => {
  const isLoading = useContextSelector(
    SkeletonContext,
    ({ isLoading }) => isLoading
  );

  if (isLoading) {
    return (
      <Fragment>
        {Array.from({ length: truncate | 1 }).map((_, index) => {
          return (
            <IonSkeletonText
              animated
              className={classNames(styles.skeleton, styles[variant])}
              key={index}
              style={{ width: index === 0 ? '100%' : '80%' }}
            />
          );
        })}
      </Fragment>
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
          [styles['pre-line']]: preLine,
        },
        className
      ),
    },
    children
  );
};
