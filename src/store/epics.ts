import { combineEpics } from 'redux-observable';
import {
  LoadI18nEpic$,
  SetLocalDataEpic$
} from './features/localization/localization.epics';
import { LocalizationActionType } from './features/localization/localization.actions';
import { AppState } from './models';

export const epics$ = combineEpics<
  LocalizationActionType,
  LocalizationActionType,
  AppState
>(LoadI18nEpic$, SetLocalDataEpic$);
