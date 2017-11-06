import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenses } from '../actions';
import uuid from 'uuid';

class ExpensesNew extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      category: '',
      monthlyAmount: '',
      annualAmount: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addExpenses, history } = this.props;
    const expense = Object.assign({}, this.state, { id: uuid()});
    addExpenses(expense);
    this.setState({
      name: '',
      category: '',
      monthlyAmount: '',
      annualAmount: '',
    });
    // history.push('/budget/expenses')
  }

  render() {
    return (
      <div>
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit.bind(this)} >
          <input
            name="name"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Expense name"
            value={this.state.name}/>

          <input
            name="category"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Category"
            value={this.state.category}/>

          <input
            name="monthlyAmount"
            type="number"
            onChange={this.handleOnChange}
            placeholder="Monthly Amount"
            value={this.state.monthlyAmount}/>

          <input type="submit" value="Add Expense" />
        </form>
      </div>
    );
  }
}


export default connect(null, { addExpenses })(ExpensesNew)
