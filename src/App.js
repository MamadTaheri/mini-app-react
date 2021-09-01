import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import UserForm from "./components/UserForm/UserForm";

const App = () => {

  const [data, setData] = useState({})

  const userSubmitHandler = (data) => {
    setData(data)
    console.log("salam")
  }

  return (
    <div>
      <Navbar />
      <>
        <Switch>
          <Route path="/signup" render={(props) => <UserForm submit={userSubmitHandler} type="create" {...props} />}/>
          <Route path="/" component={Home} />
        </Switch>
      </>
    </div>
  );
};

export default App;
