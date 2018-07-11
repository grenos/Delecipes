import React from '../../../../Users/vasilisgreen/Library/Caches/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../Users/vasilisgreen/Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// map over the expenses prop that we took from ('mapStateToProps' store.state ) and
const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

// we use mapStateToProps to give access to a specific subset of the state to the connected component
// MAP STORE STATE TO COMPONENTS' PROPS
// in this case we give access to the state's expenses array (that holds the individual expense objects) via the expenses: prop (see how we .map() the array above)
// state is provided by the connect down bellow and the provider in the app.js file
const mapStateToProps = state => {
  return {
    // we can now access props from the store-state in the component as we see above
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// connect is the function that CREATES the HOC
export default connect(mapStateToProps)(ExpenseList);
