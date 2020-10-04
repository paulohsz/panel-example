import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

ReactDOM.render(
		<BrowserRouter>
      <CssBaseline />
			<Routes />
		</BrowserRouter>,
  document.getElementById('root')
);

