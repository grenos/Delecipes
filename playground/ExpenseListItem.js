import React from '../../../../Users/vasilisgreen/Library/Caches/typescript/2.9/node_modules/@types/react';
import { Link } from '../../../../Users/vasilisgreen/Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';

const ExpenseListItem = ({ id, description, amount, wasPaidAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {wasPaidAt}
    </p>
  </div>
);

export default ExpenseListItem;
