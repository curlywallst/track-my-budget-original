import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import BudgetAbout from './components/BudgetAbout';
import BudgetPage from './containers/BudgetPage';
import ExpensesPage from './containers/ExpensesPage';
import IncomePage from './containers/IncomePage'
import ExpensesNew from './containers/ExpensesNew'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} align="left" className="App-logo" alt="logo" />
            <h1 className="App-title">TRACK MY BUDGET</h1>
            {/* <li className="App-nav"> */}
              <NavBar className="App-nav" />
            {/* </li> */}
          </header>
          <p className="App-intro">
            <Route exact path='/' component={BudgetAbout}/>
            <Route path='/about' component={BudgetAbout}/>
          </p>
          <Route exact path='/budget' component={BudgetPage}/>
          <Route path='/budget/expenses' component={ExpensesPage}/>
          <Route path='/budget/expenses/new' component={ExpensesNew}/>
          {/* <Route path='budget/income' component={IncomePage}/> */}


        </div>
      </Router>
    );
  }
}

export default App;
