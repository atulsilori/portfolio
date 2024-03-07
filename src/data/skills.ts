import { TSkillStack } from '../../types';

const skills: TSkillStack[] = [
	{
		logo: 'core.svg',
		title: 'Core',
		subtitle:
			"Just as a house's strength relies on its foundation, the core skills I have acquired through my industry experience serve as the bedrock for my professional capabilities. These fundamental abilities form the solid base upon which my expertise is built.",
		skills: [
			{
				name: 'JavaScript',
				logo: 'javascript.svg',
			},
			{
				name: 'TypeScript',
				logo: 'typescript.svg',
			},
			{
				name: 'HTML5',
				logo: 'html5.svg',
			},
			{
				name: 'CSS3',
				logo: 'css3.svg',
			},
		],
	},
	{
		title: 'Frontend Development',
		logo: 'frontend.svg',
		subtitle:
			'Frontend development is my forte. I have been working on frontend technologies for years now and I am very comfortable with my stack.',
		skills: [
			{
				name: 'React JS',
				logo: 'react.svg',
			},
			{
				name: 'Next JS',
				logo: 'next-js.png',
			},
			// {
			// 	name: 'Vite JS',
			// 	logo: 'vitejs.svg',
			// },
			{
				name: 'Tailwind CSS',
				logo: 'tailwindcss.png',
			},
			{
				name: 'Redux',
				logo: 'redux.svg',
			},
			{
				name: 'Kea',
				logo: 'kea.svg',
			},
			{
				name: 'Playwright',
				logo: 'playwright.svg',
			},
		],
	},
	{
		title: 'Project Management & SCM',
		logo: 'scm.svg',
		subtitle:
			'Source code and project management is a crucial part of any project. These are the tools that I have used over the years.',
		skills: [
			{
				name: 'GitHub',
				logo: 'github.png',
			},
			{
				name: 'Linear',
				logo: 'linear.svg',
			},
			{
				name: 'Trello',
				logo: 'trello.svg',
			},
			{
				name: 'Slack',
				logo: 'slack.svg',
			},
		],
	},
];

export default skills;
