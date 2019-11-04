import { connect } from 'react-redux';
import MainNav from './MainNav';
import { Dispatch } from 'redux';

const mapStateToProps = (globalState: any) => ({
    locale: globalState.i18n.locale
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLocale: (locale: string) => dispatch({ type: '@@i18n/SET_LOCALE', locale })
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);