import React from 'react';
import { Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';

import UserForm from './components/UserForm/UserForm';

const App = () => {
  return (
    <div>
      <Navbar />
      <>
        <Route path="/signup" component={UserForm} />
      </>
    </div>
  );
};

export default App;