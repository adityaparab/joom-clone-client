import React from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import styles from './MainNav.module.css';

interface MainNavProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const MainNav: React.SFC<MainNavProps> = props => {
  return (
    <Navbar>
      <Navbar.Header>
        <a href="/" className={`navbar-brand logo ${styles.logoAnchor}`}>
          RSUITE
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="heart" />}>
            <Translate value="titles.favorites" />
          </Nav.Item>
          <Nav.Item icon={<Icon icon="avatar" />}>
            <Translate value="titles.signIn" />
          </Nav.Item>
          <Nav.Item icon={<Icon icon="cart-arrow-down" />}>
            <Translate value="titles.myCart" />
          </Nav.Item>
          <Nav.Item icon={<Icon icon="bell" />}>0</Nav.Item>
          <Dropdown
            title={props.locale.toUpperCase()}
            icon={<Icon icon="globe2" />}
          >
            <Dropdown.Item onSelect={() => props.setLocale('en')}>
              English
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => props.setLocale('pl')}>
              Polski
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => props.setLocale('es')}>
              Español
            </Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

MainNav.propTypes = {
  locale: string.isRequired,
  setLocale: func.isRequired
};

export default connect()(MainNav);
