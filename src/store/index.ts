import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { epics$ } from './epics';
import { reducers } from './reducers';
import { AppState } from './models';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LocalizationActionType } from './features/localization/localization.actions';
import { Services } from '../services';
import * as LocalizationServices from '../services/localization.service';

const epicMiddleware = createEpicMiddleware<
  LocalizationActionType,
  LocalizationActionType,
  AppState,
  Services
>({ dependencies: LocalizationServices });

const enhancers = composeWithDevTools(applyMiddleware(thunk, epicMiddleware));

export const store = createStore(reducers, enhancers);

epicMiddleware.run(epics$);
