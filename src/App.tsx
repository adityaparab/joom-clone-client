import React from 'react';
import { connect } from 'react-redux';
import { Loader } from 'rsuite';
import MainNav from './components/MainNav/MainNavContainer';
import CategoriesNav from './components/CategoriesNav/CategoriesNavContainer';
import { AppState } from './store/models';
import {
  SelectI18nLoading,
  SelectI18nError
} from './store/features/localization/localization.selectors';
interface AppProps {
  isLoading: boolean;
  initError: string | null;
}

const App: React.SFC<AppProps> = props => {
  return (
    <React.Fragment>
      {props.isLoading && <Loader center content='loading' />}
      {!props.isLoading && !props.initError && (
        <React.Fragment>
          <MainNav />
          <CategoriesNav />
        </React.Fragment>
      )}
      {!props.isLoading && props.initError && <code>{props.initError}</code>}
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: SelectI18nLoading(state.localization),
  initError: SelectI18nError(state.localization)
});

export default connect(mapStateToProps)(App);
