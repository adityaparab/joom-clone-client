import { createReducer } from 'typesafe-actions';
import {
  localizationInitialState,
  localization
} from './localization.constants';
import {
  LoadLocalizationAsync,
  LocalizationActionType
} from './localization.actions';
import { LocalizationState } from '../../models/localization.model';

export const LocalizationReducer = createReducer<
  LocalizationState,
  LocalizationActionType
>(localizationInitialState)
  .handleAction(LoadLocalizationAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    localization,
    error: action.payload
  }))
  .handleAction(LoadLocalizationAsync.request, state => ({
    ...state,
    loading: true,
    localization,
    error: null
  }))
  .handleAction(LoadLocalizationAsync.success, (state, action) => {
    // console.log(action);
    // console.log(state);
    return {
      ...state,
      loading: false,
      localization: action.payload,
      error: null
    };
  });
