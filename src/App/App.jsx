/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import { get } from '../api';

function App() {
  get('characters', { nameStartsWith: 'spider' })
    .then(console.log);

  return (
	<>
		<Router>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
				>
					<section className="lumx-spacing-padding-horizontal-huge" />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
