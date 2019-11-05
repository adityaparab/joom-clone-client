import React from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import styles from './MainNav.module.css';
import { Language } from '../../store/models/localization.model';

interface MainNavProps {
  locale: string;
  setLocale: (locale: string) => void;
  getLocalization: () => void;
  languages: Language[];
}

const MainNav: React.SFC<MainNavProps> = props => {
  return (
    <Navbar>
      <Navbar.Header>
        <a href='/' className={`navbar-brand logo ${styles.logoAnchor}`}>
          RSUITE
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon='heart' />}>
            <Translate value='titles.favorites' />
          </Nav.Item>
          <Nav.Item icon={<Icon icon='avatar' />}>
            <Translate value='titles.signIn' />
          </Nav.Item>
          <Nav.Item icon={<Icon icon='cart-arrow-down' />}>
            <Translate value='titles.myCart' />
          </Nav.Item>
          <Nav.Item icon={<Icon icon='bell' />}>0</Nav.Item>
          <Dropdown title={props.locale} icon={<Icon icon='globe2' />}>
            {props.languages.map((lang: Language) => (
              <Dropdown.Item
                key={lang.key}
                onSelect={() => props.setLocale(lang.key)}
              >
                {lang.value}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default connect()(MainNav);
