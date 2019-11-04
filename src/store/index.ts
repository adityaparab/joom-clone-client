import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';

const translations = {
    en: {
        titles: {
            favorites: 'Favorites',
            signIn: 'Sign In',
            myCart: 'My Cart'
        }
    },
    pl: {
        titles: {
            favorites: 'Ulubione',
            signIn: 'Zaloguj się ',
            myCart: 'Moj Koszyk'
        }
    },
    es: {
        titles: {
            favorites: 'Favoritos',
            signIn: 'Iniciar sesión',
            myCart: 'Mi carrito'
        }
    }
};

const reducers = combineReducers({
    i18n: i18nReducer
});

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

syncTranslationWithStore(store);
store.dispatch({ type: '@@i18n/LOAD_TRANSLATIONS', translations });
store.dispatch({ type: '@@i18n/SET_LOCALE', locale: 'pl' });