import { LocalizationState, Language } from '../../models/localization.model';

export const SelectLanguages = (
  state: LocalizationState
): { [key: string]: string } => state.localization.languages;
export const SelectCurrentLanguage = (
  state: LocalizationState,
  locale: string
): string => state.localization.languages[locale];
export const SelectI18nLoading = (state: LocalizationState): boolean =>
  state.loading;
export const SelectI18nError = (state: LocalizationState): string | null =>
  state.error;
export const SelectAvailableLanugages = (
  state: LocalizationState
): Language[] =>
  Object.keys(state.localization.languages).map((lang: string) => ({
    key: lang,
    value: state.localization.languages[lang]
  }));
