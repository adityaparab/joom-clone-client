import React from 'react';
import MainNav from './components/MainNav/MainNavContainer';
import CategoriesNav from './components/CategoriesNav/CategoriesNavContainer';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <MainNav />
      <CategoriesNav />
    </React.Fragment>
  );
};

export default App;
