import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//! INFO

// this component uses local state to track changes on the inputs
// when we click submit form only then we dispatch to redux store
// the dispatch handler is located to its parent component '' expenesePAge.js ''
//* SEE THE VALUE = on desc input

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: props.expense ? props.expense.desc : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const desc = e.target.value;
    this.setState(() => ({ desc }));
  };

  onNoteChange = e => {
    // another way of doing it
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.desc || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide an expense description and an amount value!'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        desc: this.state.desc,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.desc}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
