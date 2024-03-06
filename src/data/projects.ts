import { TProject } from '../../types';

const projects: TProject[] = [
	{
		title: 'Minesweeper Game',
		description:
			'Developed a minesweeper game, a logic puzzle where you click on tiles in a grid to reveal hidden mines, using numeric clues to strategically uncover safe tiles without detonating any mines.',
		technologies: ['ReactJS', 'TypeScript', 'SCSS'],
		url: 'https://github.com/atulsilori/minesweeper',
	},
	{
		title: 'Estore app',
		description:
			'This is a simplistic software application that aims to emulate the core features and user experience of an e-commerce website dedicated to selling clothing items. While not as comprehensive as a full-fledged online shopping platform, this application provides a streamlined digital environment where users can browse through a catalog of apparel products, select desired items, and complete simulated purchase transactions.',
		technologies: ['ReactJS', 'Bootstrap', 'Node JS', 'MySQL'],
		url: 'https://github.com/atulsilori/estore',
	},
	{
		title: 'Weather App',
		description:
			'A PWA(progressive web application) made using ReactJS that uses OpenWeatherMap API to fetch the weather of a place and showing a card displaying temperature, city, country and type of weather.',
		technologies: ['ReactJS', 'Material UI', 'KEA', 'Tanstack React Query'],
		url: 'https://github.com/atulsilori/weatherapp',
	},
];

export default projects;
