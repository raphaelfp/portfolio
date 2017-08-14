export default [
	{
		bgColor: 'white',
		imageSrc: 'emaily.png',
		appName: 'Emaily',
		appIntro: 'A campaign app to send email surveys',
		appAddress: 'https://emaily-server.herokuapp.com/',
		appGithub: 'https://github.com/raphaelfp/emaily-server/',
		techStacks: [
			{
				className: 'devicon-react-original colored',
				dataTip: 'React+Redux'
			},
			{
				className: 'devicon-nodejs-plain colored',
				dataTip: 'NodeJS'
			},
			{
				className: 'devicon-express-original colored',
				dataTip: 'Express'
			},
			{
				className: 'devicon-mongodb-plain colored',
				dataTip: 'MongoDB'
			},
			{
				className: 'devicon-webpack-plain colored',
				dataTip: 'Webpack'
			}
		],
		appDescription:
			'This mega app includes the full gamut of features, including everything from authentication to email handling. The app can be used to send mass emails to a big list of users for the purpose of collecting feedback and showing the results. It is integrated with Google Oauth 2.0 for login, Stripe for credit card payments and SendGrid to handle mass emails.'
	}
];
