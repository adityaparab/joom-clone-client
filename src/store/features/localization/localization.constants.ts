import {
  Localization,
  LocalizationState
} from '../../models/localization.model';

export const localization: Localization = {
  languages: {},
  selectedLanguage: '',
  translations: {}
};

export const localizationInitialState: LocalizationState = {
  error: null,
  localization,
  loading: true
};
