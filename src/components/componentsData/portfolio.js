export default [
	{
		bgColor: 'white',
		imageSrc: 'emaily.png',
		appName: 'Emaily',
		appIntro: 'A campaign app to send email surveys.',
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
	},
	{
		bgColor: '#e0f2f1',
		imageSrc: 'pyo.jpg',
		appName: 'Pyo',
		appIntro:
			'A Paint like app built with C#/.NET and Windows Forms that uses the Myo armband instead of a mouse and a keyboard.',
		appGithub: 'https://github.com/raphaelfp/pyo',
		techStacks: [
			{
				className: 'devicon-csharp-plain colored',
				dataTip: 'C#'
			},
			{
				className: 'devicon-dot-net-plain-wordmark colored',
				dataTip: '.NET'
			}
		],
		appDescription:
			"Pyo is an application I built with a friend for an assignment in my third year in college. It's a Paint like app built with C#/.NET and Windows Forms that uses the Myo armband instead of a mouse and a keyboard. One of the main goals of the assignment was to build an app for people with some types of disabilities, people without a hand or part of it. But it also can be used by people without disabilities. The app uses the MyoSharp Library and it was updated to .NET 4.5.2. The code is in portuguese because it was presented in my college and one of the requirements is that it should be written in portuguese. I live in Brazil =)"
	}
];
