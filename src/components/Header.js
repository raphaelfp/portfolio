import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/lib/fa';

const Header = props => {
	return (
		<div className="container portfolio">
			<div className="row" style={{ display: 'block' }}>
				<a className="right" href="https://www.linkedin.com/in/raphaelfp/">
					<FaLinkedin
						style={{ margin: '10px', color: 'black', fontSize: '30px' }}
					/>
				</a>
				<a className="right" href="https://www.github.com/raphaelfp/">
					<FaGithub
						style={{ margin: '10px', color: 'black', fontSize: '30px' }}
					/>
				</a>
			</div>
			<h5>RAPHAEL FERNANDES PEREIRA</h5>
			<h6>FULLSTACK SOFTWARE DEVELOPER • JAVASCRIPT LOVER </h6>
		</div>
	);
};

export default Header;
