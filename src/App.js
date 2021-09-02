import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
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

  const userUpdateHandler = (inputdata) => {
    // console.log(inputdata)
    let currentState = [...data]
    let updatedIndex = currentState.findIndex(user => {
      return user.id === inputdata.id
    })
    currentState[updatedIndex] = inputdata
    setData(currentState) 
  }


  return (
    <div>
      <Navbar />  
      <>
        <Switch>
          
          <Route path="/signup"    render={(props) => <UserForm submitUser={userCreateHandler} type="create" {...props} />}/>
          <Route path="/users/:id" render={(props) => <UserForm updateUser={userUpdateHandler} type="update"  users={data} {...props} />} />
          <Route path="/users"     render={(props) => <Home users={data} {...props} />} />
          <Redirect from="/" to="/users" />
        </Switch>
      </>
    </div>
  );
};

export default App;
