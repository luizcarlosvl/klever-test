import '../index.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../Images/marca.png';
import star from '../Images/star.png';

function AddToken() {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');

  const history = useHistory();

  const newToken = {
    token,
    balance,
  };

  const save = () => {
    if (token === '' || balance === '') {
      // eslint-disable-next-line no-alert
      alert('The Token and Balance fields are required');
    } else if (localStorage.klever) {
      const tokens = JSON.parse(localStorage.klever);
      if (tokens.find((value) => value.token === token)) {
        // eslint-disable-next-line no-alert
        alert('The Token already exists');
      } else {
        const updatedTokens = [...tokens, newToken];
        localStorage.setItem('klever', JSON.stringify(updatedTokens));
        history.push('/');
      }
    } else {
      const updatedTokens = [newToken];
      localStorage.setItem('klever', JSON.stringify(updatedTokens));
      history.push('/');
    }
  };

  return (
    <div className="main-container">
      <img className="logo" src={ logo } alt="brand" />
      <header className="header-add-container">
        <img className="star" src={ star } alt="brand" />
        <h1 className="title-add">Wish Wallet</h1>
      </header>
      <div className="add-body-container">
        <div className="sub-header">
          <h2 className="add-subtitle">Add Token</h2>
          <Link to="/">
            <button className="back-button-add" type="button">Back</button>
          </Link>
        </div>
        <label htmlFor="token-input">
          Token
          <input
            data-testid="token-input"
            onChange={ (event) => setToken(event.target.value) }
          />
        </label>
        <label htmlFor="balance-input">
          Balance
          <input
            data-testid="balance-input"
            onChange={ (event) => setBalance(event.target.value) }
          />
        </label>
        <button className="save-button" onClick={ save } type="button">Save</button>
      </div>
    </div>
  );
}

export default AddToken;
