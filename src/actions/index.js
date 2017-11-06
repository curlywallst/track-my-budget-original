import fetch from 'isomorphic-fetch';

export function addExpenses(expense) {
  return {
    type: 'ADD_EXPENSE',
    expense
  };
};
