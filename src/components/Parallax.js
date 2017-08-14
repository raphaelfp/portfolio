import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxContainer = props => {
	return (
		<div>
			<Parallax className="parallax" bgImage={props.background} strength={400}>
				<div>
					<h3>
						{props.title}
					</h3>
				</div>
			</Parallax>
		</div>
	);
};

export default ParallaxContainer;
