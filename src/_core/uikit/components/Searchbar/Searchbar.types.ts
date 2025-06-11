import { IonSearchbar } from '@ionic/react';

export interface SearchbarOnChangeParams {
  value?: string;
}

export type OnIonChangeHandler = Parameters<
  typeof IonSearchbar
>['0']['onIonChange'];

export type OnIonClearHandler = Parameters<
  typeof IonSearchbar
>['0']['onIonClear'];
