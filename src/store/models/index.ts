import { LocalizationState } from './localization.model';
import { I18nState } from 'react-redux-i18n';

export interface AppState {
  localization: LocalizationState;
  i18n: I18nState;
}
