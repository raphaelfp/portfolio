import _ from 'lodash';
import React, { Component } from 'react';
import Parallax from './Parallax';

import Content from './Content/Content';
import FloatingButton from './FloatingButton';
import Header from './Header';
import portfolio from './componentsData/portfolio';

class App extends Component {
	renderPortfolioApps() {
		return _.map(portfolio, app => {
			return (
				<div
					key={app.appName}
					style={{ backgroundColor: app.bgColor || 'white', padding: '10px 0' }}
				>
					<div className="container">
						<Content componentData={app} />
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Parallax background="./img/desk.jpg" title="Portfolio" />
				{this.renderPortfolioApps()}

				<FloatingButton />
			</div>
		);
	}
}

export default App;
