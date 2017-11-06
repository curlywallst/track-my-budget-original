import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'

  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Category',
    accessor: 'category',
  }, {
    Header: 'Monthly Amount',
    accessor: 'monthlyAmount',
  }, {
    Header: 'Annual Amount',
    accessor: 'annualAmount',
  }]

const ExpensesList = ({ expenses }) => {
  const renderExpenses = expenses
  renderExpenses.map(expense =>
  expense.name = <Link key={expense.id} to={`/expenses/${expense.id}`}>{expense.name}</Link>
);
  return (
    <div>
      <ReactTable
        data={renderExpenses}
        columns={columns}
        defaultSorted={[
            {
              id: "category",
              desc: true
            }
          ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};

export default ExpensesList;
