import React from 'react';
import { Link } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const ExpensesList = ({ match, expenses }) => {
  var renderExpenses = <div></div>
  if (expenses !== undefined) {
    renderExpenses = expenses.map(expense =>
      <div key={expense.id}>{expense.category}:  <Link style={{ marginRight: '12px' }} key={expense.id} to={`/budget/expenses/${expense.id}`}>{expense.name}</Link> - {expense.monthlyAmount}</div>
    )
  }

  return (
    <div>
      {renderExpenses}
    </div>
  );
};

export default ExpensesList;
