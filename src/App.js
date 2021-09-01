import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import UserForm from "./components/UserForm/UserForm";

const App = () => {

  const [data, setData] = useState([])

  const userCreateHandler = (inputdata) => {
    
    if(data.length === 0){
      setData([inputdata])
    } else {
      let newArray = [...data, inputdata]
      setData(newArray)
    }  
  }


  return (
    <div>
      <Navbar />
      <>
        <Switch>
          <Route path="/signup" render={(props) => <UserForm submit={userCreateHandler} type="create" {...props} />}/>
          <Route path="/"       render={(props) => <Home users={data} {...props} />} />
        </Switch>
      </>
    </div>
  );
};

export default App;
