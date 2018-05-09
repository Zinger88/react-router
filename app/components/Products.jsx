import React from 'react';
import Phone  from './phone.jsx';
import {Link, BrowserRouter as Router , Route, Switch} from 'react-router-dom';


class Products extends React.Component {
	render () {
		return  <div>
					<h2>Goods</h2>
					<Link to="/products/phones">Телефоны</Link>

					<Switch>
	                    <Route path="/products/phones" component={Phone} />
	                    
	                </Switch>
				</div>
	}
}

module.exports = Products;