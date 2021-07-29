import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import ErrorPage from './views/error_page/ErrorPage';
import AddProductPage from './views/addproduct_page/AddProductPage';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
	<Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/admin/addproduct" component={AddProductPage}/>
        <Route path="/error" component={ErrorPage}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


