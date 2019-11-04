import { I18n } from '../../../models/i18n.model';

const i18nInitialState: I18n = {
    availableLocales: [],
    locale: 'en',
    translations: {}
};

export const i18nReducer = (state: I18n = i18nInitialState, action) => { };