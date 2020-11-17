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


/*
https://material-ui.com/pt/api/menu/
https://css-tricks.com/solved-with-css-dropdown-menus/
https://semantic-ui.com/modules/dropdown.html#/usage
https://www.youtube.com/watch?v=RzctM_ZXWAo
https://drive.google.com/file/d/1ZUpPEa46v6RQgeDlW-KQgKTLu91TL6ri/edit
*/