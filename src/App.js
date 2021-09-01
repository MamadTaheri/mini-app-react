import React from 'react';
import { Route } from 'react-router';

import UserForm from './components/UserForm/UserForm';

const App = () => {
  return (
    <div>
      
      <>
        <Route path="/signup" component={UserForm} />
      </>
    </div>
  );
};

export default App;