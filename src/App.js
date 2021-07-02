import React, { useEffect, useReducer, useState } from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/HomeArea/HomeArea';
import Video from './components/Video/Video';


function App() {
  // const homeRoutes = "/| ";

  const [stateSearchVal, setStateSearchVal] = useState("");


  useEffect(() => {
    console.log(stateSearchVal);
  }, [stateSearchVal]);

  const searchItem = (e) => {
    setStateSearchVal(e);
  };

  return (
    <BrowserRouter>
      <Layout searchItem={searchItem}>
        <Switch>
          <Redirect exact from={"/"} to="/home" />
          <Route path={"/home"}>
            <Home valSearched={stateSearchVal} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
