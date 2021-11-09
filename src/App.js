import './App.css';
import React from 'react';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home.js';
import Blogs from './Components/Blogs.js';
import Products from './Components/Products.js';
import Nav from './Components/Nav.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/index.js";

function App() {
    const store = createStore(rootReducer);

  return (
      <Router>
        <div className="App">
          <Nav/>
            <Provider store={store}>
              <Routes>
                <Route path={"/products"} element={<Products/>}/>
                <Route path={"/blogs"} element={<Blogs/>}/>
                  <Route exact path={"/"} element={<Home/>}/>
              </Routes>
            </Provider>
        </div>
      </Router>
  );
}

export default App;