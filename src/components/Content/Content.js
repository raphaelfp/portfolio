import React from 'react';

import ImageContent from './ImageContent';
import TextContent from './TextContent';

const Content = props => {
	const { componentData: { imageSrc } } = props;
	return (
		<div className="content">
			<div className="row">
				<ImageContent imageSrc={imageSrc} />
				<TextContent {...props} />
			</div>
		</div>
	);
};

export default Content;
