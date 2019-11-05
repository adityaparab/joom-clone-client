import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { store } from './store';
import App from './App';

import 'rsuite/dist/styles/rsuite-default.css';
import './index.css';
import { Dispatch } from 'redux';
import { LoadLocalizationAsync } from './store/features/localization/localization.actions';

interface AppWrapperProps {
  loadTranslationsData: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadTranslationsData: () => dispatch(LoadLocalizationAsync.request())
});

const AppWrapperComponent: React.SFC<AppWrapperProps> = props => {
  setTimeout(props.loadTranslationsData, 2000);
  return <App />;
};

const AppWrapper = connect(
  null,
  mapDispatchToProps
)(AppWrapperComponent);

const Index = () => (
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
