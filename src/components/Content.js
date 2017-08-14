import _ from 'lodash';
import React from 'react';
import ReactTooltip from 'react-tooltip';

const Content = ({
	componentData: {
		imageSrc,
		appName,
		appIntro,
		appAddress,
		appGithub,
		techStacks,
		appDescription
	}
}) => {
	const renderTechStacks = () => {
		return _.map(techStacks, ({ className, dataTip }) => {
			return <i className={className} data-tip={dataTip} />;
		});
	};

	return (
		<div className="content">
			<div className="row">
				<div className="col s12 m7">
					<img
						className="responsive-img z-depth-1 hoverable"
						src={`./img/${imageSrc}`}
					/>
				</div>
				<div className="col s12 m5">
					<h5>
						{appName}
					</h5>
					<p>
						{appIntro}
					</p>
					<a href={appAddress}>
						Demo
						<i className="material-icons tiny">open_in_new</i>
					</a>
					<br />
					<a href={appGithub}>
						Github
						<i className="material-icons tiny">open_in_new</i>
					</a>
					<h5>Tech Stack</h5>
					<div>
						<ReactTooltip place="top" type="dark" effect="solid" />
						{renderTechStacks()}
					</div>
					<p style={{ textAlign: 'justify' }}>
						{appDescription}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Content;
