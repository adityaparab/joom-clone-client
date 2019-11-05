import { connect } from 'react-redux';
import MainNav from './MainNav';
import { Dispatch } from 'redux';
import {
  LoadLocalizationAsync,
  I18nSetLocaleAction
} from '../../store/features/localization/localization.actions';
import { AppState } from '../../store/models';
import {
  SelectAvailableLanugages,
  SelectCurrentLanguage
} from '../../store/features/localization/localization.selectors';

const mapStateToProps = (globalState: AppState) => ({
  locale: SelectCurrentLanguage(
    globalState.localization,
    globalState.i18n.locale
  ),
  languages: SelectAvailableLanugages(globalState.localization)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLocale: (locale: string) => dispatch(I18nSetLocaleAction(locale)),
  getLocalization: () => dispatch(LoadLocalizationAsync.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
