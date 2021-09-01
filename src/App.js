import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import UserForm from './components/UserForm/UserForm';

const App = () => {
  return (
    <div>
      <Navbar />
      <>
        <Route path="/signup" component={UserForm} />
        <Route path="/" component={Home} />
      </>
    </div>
  );
};

export default App;