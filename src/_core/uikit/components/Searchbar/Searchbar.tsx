import { forwardRef, useCallback } from 'react';
import classNames from 'classnames';
import { noop } from 'lodash';

import { IonSearchbar } from '@ionic/react';

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
  onChange?: (params: SearchbarOnChangeParams) => void;
}

export const Searchbar = forwardRef<{}, SearchbarProps>(
  function HeaderSearchbar({ value, placeholder, onChange = noop }, _) {
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
        className={classNames(styles.root, components.searchbar)}
        onIonChange={handleOnChange}
        onIonClear={handleOnClear}
        placeholder={placeholder}
        value={value}
      />
    );
  }
);
