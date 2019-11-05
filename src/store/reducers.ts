import { combineReducers } from 'redux';
import { LocalizationReducer } from './features/localization/localization.reducer';
import { i18nReducer } from 'react-redux-i18n';

export const reducers = combineReducers({
  localization: LocalizationReducer,
  i18n: i18nReducer
});
