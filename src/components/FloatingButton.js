import React, { Component } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/lib/fa';

class FloatingButton extends Component {
	constructor(props) {
		super(props);
		this.state = { showFloatingButton: false };
	}

	render() {
		return (
			<div className="fixed-action-btn">
				<a
					className="btn-floating btn-large teal"
					onClick={() =>
						this.setState({
							showFloatingButton: !this.state.showFloatingButton
						})}
				>
					<i className="large material-icons">account_box</i>
				</a>
				<ul style={{ visibility: 'visible' }}>
					<li>
						<a
							className="btn-floating"
							href="https://www.linkedin.com/in/raphaelfp/"
							style={{ opacity: this.state.showFloatingButton ? 1 : 0 }}
						>
							<FaLinkedin
								style={{ margin: '10px', color: 'black', fontSize: '20px' }}
							/>
						</a>
					</li>
					<li>
						<a
							className="btn-floating "
							href="https://www.github.com/raphaelfp/"
							style={{ opacity: this.state.showFloatingButton ? 1 : 0 }}
						>
							<FaGithub
								style={{ margin: '10px', color: 'black', fontSize: '20px' }}
							/>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default FloatingButton;
