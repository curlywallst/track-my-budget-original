import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpensesList from '../components/ExpensesList';
import ExpensesNew from './ExpensesNew';

class ExpensesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: []
    }
  }

  render() {
    const { match, expenses } = this.props

    return (
      <div>
        <Switch>
          {/* <Route path={`${match.url}/:expenseId`} component={ExpensesShow}/> */}
          <Route exact path={match.url} render={() => (
            <div>
              <h2>Expenses</h2>
              <ExpensesList expenses={expenses} />
              <ExpensesNew />
              <p>Please Click Budget to go to Budget Page</p>
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
}

export default connect(mapStateToProps, null)(ExpensesPage);
