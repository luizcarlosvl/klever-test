import '../index.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from '../Components/Table';
import logo from '../Images/marca.png';
import star from '../Images/star.png';

function Home() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (localStorage.klever) setTokens(JSON.parse(localStorage.klever));
  }, []);

  return (
    <div className="main-container">
      <img className="logo" src={ logo } alt="brand" />
      <header className="header-home-container">
        <img className="star" src={ star } alt="brand" />
        <h1 className="title-home">Wish Wallet</h1>
        <Link to="addtoken">
          <button className="add-button" type="button">Add Token</button>
        </Link>
      </header>
      <table className="table-container">
        <thead>
          <tr className="table-header">
            <th className="th-token">Tokens</th>
            <th>Balance</th>
          </tr>
          { tokens.map((token, index) => (
            <Table
              key={ index }
              id={ index }
              token={ token.token }
              balance={ token.balance }
              identifier={ token.token }
            />
          ))}
        </thead>
      </table>
    </div>
  );
}

export default Home;
