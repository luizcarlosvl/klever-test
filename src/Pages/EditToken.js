import '../index.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../Images/marca.png';
import star from '../Images/star.png';

function EditToken() {
  const params = useParams();
  const { id } = params;
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    const tokens = JSON.parse(localStorage.klever);
    setToken(tokens[id].token);
    setBalance(tokens[id].balance);
  }, [id]);

  const save = () => {
    const newToken = {
      token,
      balance,
    };
    const tokens = JSON.parse(localStorage.klever);
    tokens.splice(id, 1, newToken);
    localStorage.setItem('klever', JSON.stringify(tokens));
  };

  const remove = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you want to remove this token?')) {
      const tokens = JSON.parse(localStorage.klever);
      tokens.splice(id, 1);
      localStorage.setItem('klever', JSON.stringify(tokens));
    }
    const tokens = JSON.parse(localStorage.klever);
    tokens.splice(id, 1);
    localStorage.setItem('klever', JSON.stringify(tokens));
  };

  return (
    <div className="main-container">
      <img className="logo" src={ logo } alt="brand" />
      <header className="header-add-container">
        <img className="star" src={ star } alt="brand" />
        <h1 className="title-add">Wish Wallet</h1>
      </header>
      <div>
        <div className="sub-header">
          <h2>Edit Token</h2>
          <Link to="/">
            <button className="back-button" type="button">Back</button>
          </Link>
        </div>
        <label htmlFor="token-input">
          Token
          <input
            value={ token }
            data-testid="token-input"
            onChange={ (event) => setToken(event.target.value) }
          />
        </label>
        <label htmlFor="balance-input">
          Balance
          <input
            value={ balance }
            data-testid="balance-input"
            onChange={ (event) => setBalance(event.target.value) }
          />
        </label>
        <div className="sub-header">
          <Link to="/">
            <button
              className="remove-button"
              onClick={ remove }
              type="button"
            >
              Remove
            </button>
          </Link>
          <Link to="/">
            <button className="save-button" onClick={ save } type="button">Save</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditToken;
