import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

test('check elements on Home Page', () => {
  render(<App />);
  const linkToToken = screen.getByText(/Add Token/i);
  expect(linkToToken).toBeInTheDocument();
  const homeTitle = screen.getByText(/Wish Wallet/i);
  expect(homeTitle).toBeInTheDocument();
  const tokenSubTitle = screen.getByText(/Tokens/i);
  expect(tokenSubTitle).toBeInTheDocument();
  const balanceSubTitle = screen.getByText(/Balance/i);
  expect(balanceSubTitle).toBeInTheDocument();
});

test('check elements and links AddToken Page', () => {
  renderWithRouter(<App />);
  const add = screen.getByRole('button', { name: /Add Token/i });
  fireEvent.click(add);
  const linkToHome = screen.getByText(/Back/i);
  expect(linkToHome).toBeInTheDocument();
  const homeTitle = screen.getByText(/Wish Wallet/i);
  expect(homeTitle).toBeInTheDocument();
  const back = screen.getByRole('button', { name: /Back/i });
  fireEvent.click(back);
  global.window = { location: { pathname: null } };
  expect(global.window.location.pathname).toEqual('/');
});

test('check elements, links and functionalities on Pages', () => {
  renderWithRouter(<App />);
  const add = screen.getByRole('button', { name: /Add Token/i });
  fireEvent.click(add);
  const token = screen.getByTestId('token-input');
  fireEvent.change(token, {target: {value: 'USD'}});
  const balance = screen.getByTestId('balance-input');
  fireEvent.change(balance, {target: {value: '5000'}})
  const save = screen.getByRole('button', { name: /Save/i });
  fireEvent.click(save);
  global.window = { location: { pathname: null } };
  expect(global.window.location.pathname).toEqual('/');
  const tokenUSD = screen.getByText(/USD/i);
  expect(tokenUSD).toBeInTheDocument();
  const editar = screen.getByAltText('pencil')
  fireEvent.click(editar);
  global.window = { location: { pathname: null } };
  expect(global.window.location.pathname).toEqual('/edittoken/0');
  const tokenEdit = screen.getByTestId('token-input');
  fireEvent.change(tokenEdit, {target: {value: 'BRL'}});
  const editSave = screen.getByRole('button', { name: /Save/i });
  fireEvent.click(editSave);
  global.window = { location: { pathname: null } };
  expect(global.window.location.pathname).toEqual('/');
  const tokenBRL = screen.getByText(/BRL/i);
  expect(tokenBRL).toBeInTheDocument();
});