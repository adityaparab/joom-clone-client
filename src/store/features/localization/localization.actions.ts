import { createAsyncAction, ActionType } from 'typesafe-actions';
import { Localization } from '../../models/localization.model';

export const LoadLocalizationAsync = createAsyncAction(
  'LOCALIZATION/LOAD_I18N_START',
  'LOCALIZATION/LOAD_I18N_SUCCESS',
  'LOCALIZATION/LOAD_I18N_FAILURE'
)<undefined, Localization, string>();

export const I18nSetTranslationsAction = (translations: object) => ({
  type: '@@i18n/LOAD_TRANSLATIONS',
  translations
});

export const I18nSetLocaleAction = (locale: string) => ({
  type: '@@i18n/SET_LOCALE',
  locale
});

export type LocalizationActionType = ActionType<
  | typeof LoadLocalizationAsync
  | typeof I18nSetLocaleAction
  | typeof I18nSetTranslationsAction
>;
