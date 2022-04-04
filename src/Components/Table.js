import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pencil from '../Images/pencil.png';

function Table({ id, token, balance }) {
  return (
    <tr className="table-body">
      <td>
        <Link to={ `edittoken/${id}` }>
          <input
            className="pencil"
            type="image"
            src={ pencil }
            alt="pencil"
          />
        </Link>
      </td>
      <td className="token">{ token }</td>
      <td>{ balance }</td>
    </tr>
  );
}

export default Table;

Table.propTypes = {
  id: propTypes.number.isRequired,
  token: propTypes.string.isRequired,
  balance: propTypes.string.isRequired,
};
