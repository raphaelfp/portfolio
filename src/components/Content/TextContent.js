import _ from 'lodash';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import TechStackIcon from './TechStackIcon';

const TextContent = ({
	even,
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
			return (
				<TechStackIcon className={className} data-tip={dataTip} key={dataTip} />
			);
		});
	};

	return (
		<div className="col s12 m5">
			<h5>
				{appName}
			</h5>
			<p>
				{appIntro}
			</p>
			{appAddress
				? <a href={appAddress}>
						Demo
						<i className="material-icons tiny">open_in_new</i>
					</a>
				: ''}
			<br />
			{appGithub
				? <a href={appGithub}>
						Github
						<i className="material-icons tiny">open_in_new</i>
					</a>
				: ''}
			<h5>Tech Stack</h5>
			<div>
				<ReactTooltip place="top" type="dark" effect="solid" />
				{renderTechStacks()}
			</div>
			<p style={{ textAlign: 'justify' }}>
				{appDescription}
			</p>
		</div>
	);
};

export default TextContent;
