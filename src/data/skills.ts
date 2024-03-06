import { TSkillStack } from '../../types';

const skills: TSkillStack[] = [
	{
		logo: 'core.svg',
		title: 'Core',
		subtitle:
			'The build of a house is only as strong as its foundation. These are the core skills that I have developed over the years.',
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
			'Fairly new to the frontend world, but I have been working on it for a while now. I am currently working on a few projects using Next JS and React Native. TailwindCSS is my go-to CSS framework.',
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
