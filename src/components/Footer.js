import React from 'react';

const Footer = props => {
	return (
		<footer className="page-footer teal">
			<div className="container">
				<h5 className="white-text">Raphael Fernandes Pereira</h5>
				<p className="grey-text text-lighten-4">
					Fullstack Software Developer - I am available for hire! Check out my
					Linkedin if you are interested
				</p>
			</div>
			<div className="footer-copyright">
				<div className="container">
					Made by {''}
					<a
						className="brown-text text-lighten-3"
						href="https://github.com/raphaelfp/portfolio"
					>
						raphaelfp
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
