import React from 'react';

const ImageContent = ({ imageSrc }) => {
	return (
		<div className="col s12 m7">
			<img
				className="responsive-img z-depth-1 hoverable"
				src={`./img/${imageSrc}`}
				alt={imageSrc}
			/>
		</div>
	);
};

export default ImageContent;
