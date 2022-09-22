
import {useState} from 'react'

//SPA - single page application bec of react-router-dom
import Home from './pages/Home';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';

import Header from './components/header';

import {usercontext} from './context/userContext';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//context allows all children components (which are wrapped with provider) to be able to access global state

// in redux, you need to install redux/toolkit, react-redux, and redux

//alternative of using redux (for smaller scale) is a combination of context (to pass global states to children components) and reducer (useReducer hook from react) --- it has state and action that contains type & payload

function App() {
  const [name, setName] = useState('')
  console.log(name)

  return (
    <BrowserRouter>
      <usercontext.Provider value={{name, setName}}>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/products" element={ <Products /> }/>
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </usercontext.Provider>
    </BrowserRouter>
  );
}

export default App;
