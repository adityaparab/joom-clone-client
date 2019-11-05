import { ActionType } from 'typesafe-actions';
import { LocalizationActionType } from './features/localization/localization.actions';

export type RootActions = ActionType<LocalizationActionType>;
