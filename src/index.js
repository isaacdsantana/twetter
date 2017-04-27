import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin(); //Necessário para os componentes material-ui

ReactDOM.render(
	<MuiThemeProvider>
		<App/>
	</MuiThemeProvider>,
  document.getElementById('root')
);
