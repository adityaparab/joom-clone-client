import { of, from } from 'rxjs';
import { filter, map, catchError, switchMap } from 'rxjs/operators';
import { Epic, ActionsObservable } from 'redux-observable';
import { syncTranslationWithStore } from 'react-redux-i18n';
import { store } from '../../';
import {
  LocalizationActionType,
  LoadLocalizationAsync,
  I18nSetTranslationsAction,
  I18nSetLocaleAction
} from './localization.actions';
import { isActionOf, ActionType } from 'typesafe-actions';
import { Localization } from '../../models/localization.model';

const getI18n = () =>
  fetch('http://localhost:3001/i18n').then<Localization>(response =>
    response.json()
  );

export const LoadI18nEpic$: Epic<LocalizationActionType> = (
  action$: ActionsObservable<LocalizationActionType>
) =>
  action$.pipe(
    filter(isActionOf(LoadLocalizationAsync.request)),
    switchMap(() =>
      from(getI18n()).pipe(
        map((localization: Localization) =>
          LoadLocalizationAsync.success(localization)
        ),
        catchError((error: Error) =>
          of(LoadLocalizationAsync.failure(error.message))
        )
      )
    )
  );

export const SetLocalDataEpic$: Epic<LocalizationActionType> = (
  action$: ActionsObservable<LocalizationActionType>
) =>
  action$.pipe(
    filter(isActionOf(LoadLocalizationAsync.success)),
    switchMap((action: ActionType<typeof LoadLocalizationAsync.success>) => {
      const { payload } = action;
      syncTranslationWithStore(store);
      return of(
        I18nSetTranslationsAction(payload.translations),
        I18nSetLocaleAction(payload.selectedLanguage)
      );
    })
  );
