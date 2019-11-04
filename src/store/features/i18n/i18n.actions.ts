import { Action } from 'redux';

export const ACTION_TYPES = {
    LOAD_TRANSLATIONS_START: '@@i18n/LOAD_TRANSLATIONS_START',
    LOAD_TRANSLATIONS_SUCCESS: '@@i18n/LOAD_TRANSLATIONS',
    LOAD_TRANSLATIONS_FAILURE: '@@i18n/LOAD_TRANSLATIONS_FAILURE'
};

export const LoadTranslationsStartAction: Action<'@@i18n/LOAD_TRANSLATIONS_START'> = () => ({
    type: ACTION_TYPES.LOAD_TRANSLATIONS_START
});

export const LoadTranslationsSuccessAction = (translations: object) => ({
    type: ACTION_TYPES.LOAD_TRANSLATIONS_SUCCESS,
    translations
});

export const LoadTranslationsFailureAction = (error: Error) => ({
    type: ACTION_TYPES.LOAD_TRANSLATIONS_FAILURE,
    error
});

export const SetLocate = (locale: string) => ({
    type: '@@i18n/SET_LOCALE',
    locale
});

