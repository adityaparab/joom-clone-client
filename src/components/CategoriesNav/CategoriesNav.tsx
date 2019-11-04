import React from 'react';
import { Nav } from 'rsuite';

const CategoriesNav: React.SFC = props => {
  return (
    <Nav>
      <Nav.Item>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
  );
};

CategoriesNav.propTypes = {};

export default CategoriesNav;
