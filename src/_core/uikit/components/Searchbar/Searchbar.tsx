import { forwardRef, useCallback } from 'react';
import classNames from 'classnames';
import { noop } from 'lodash';

import { IonSearchbar } from '@ionic/react';

import { ICON } from '../Icon';

import {
  SearchbarOnChangeParams,
  OnIonChangeHandler,
  OnIonClearHandler,
} from './Searchbar.types';

import styles from './Searchbar.module.scss';
import components from '../components.module.scss';

export interface SearchbarProps {
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (params: SearchbarOnChangeParams) => void;
}

export const Searchbar = forwardRef<{}, SearchbarProps>(
  function HeaderSearchbar(
    { value, placeholder, autoFocus, onChange = noop },
    _
  ) {
    const handleOnChange: OnIonChangeHandler = useCallback(
      ({ detail: { value } }) => {
        onChange({ value });
      },
      [onChange]
    );

    const handleOnClear: OnIonClearHandler = useCallback(() => {
      onChange({});
    }, [onChange]);

    return (
      <IonSearchbar
        autoFocus={autoFocus}
        className={classNames(styles.root, components.searchbar)}
        onIonChange={handleOnChange}
        onIonClear={handleOnClear}
        placeholder={placeholder}
        searchIcon={ICON.search}
        value={value}
      />
    );
  }
);
