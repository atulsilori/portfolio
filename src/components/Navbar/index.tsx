import React, { useEffect } from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import GitHub from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/router';
import socials from '@/data/socials';
import MenuRounded from '@mui/icons-material/MenuRounded';
import DarkModeToggler from '@/components/Navbar/DarkModeToggler';
import { Twitter } from '@mui/icons-material';
import Image from 'next/image';

type Props = {
	onToggleMode: () => void;
};

const links = [
	{
		name: 'Home',
		href: '#home',
	},
	{
		name: 'Skills',
		href: '#skills',
	},
	{
		name: 'Projects',
		href: '#projects',
	},
	{
		name: 'Experience',
		href: '#experience',
	},
	{
		name: 'Resume',
		href: '#resume',
	},
];

const orionPrime = localFont({
	src: '../../assets/fonts/Orionprimedemo.ttf',
});

const Navbar: React.FC<Props> = ({ onToggleMode }) => {
	const router = useRouter();
	const [expanded, setExpanded] = React.useState(false);
	const [blur, setBlur] = React.useState(false);
	const [id, setId] = React.useState('');

	const scrollHandler = () => {
		const elements = document.querySelectorAll('[data-scroll-target]');
		elements.forEach(element => {
			const rect = element.getBoundingClientRect();
			// If the center of the element is within the viewport
			// router.push(`/#${element.id}`);
			if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
				setId(element.id);
				return;
			}
			// Exit loop after finding the first visible element
		});
		if (window.scrollY >= 20) {
			setBlur(true);
		} else {
			setBlur(false);
		}
	};

	useEffect(() => {
		if (id) {
			// router.push(`/#${id}`, undefined, { scroll: false });
			window.history.pushState(null, '', window.location.origin + `#${id}`);
		}
		console.log(id);
	}, [id]);

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<>
			<div
				className={`w-screen px-5 md:px-10 lg:px-20 z-50 fixed ${
					blur ? 'backdrop-blur-lg !bg-opacity-50 shadow transition-all' : ''
				} bg-light-primary dark:bg-dark-primary py-5 justify-between text-dark-primary dark:text-light-primary md:flex hidden `}
			>
				<span className={`${orionPrime.className}`}>
					<Image
						src={require(`../../assets/portfolio.svg`)}
						alt="PORTFOLIO"
						width={50}
						height={50}
						quality={100}
					/>
				</span>
				<div className={'flex gap-x-8 items-center'}>
					{links.map((link, index) => (
						<Link
							scroll={true}
							className={`${
								`#${id}` === link.href
									? 'text-primary font-semibold border-b-2 border-yellow-dark'
									: 'text-dark-primary dark:text-light-primary'
							} transition-all ease-out duration-300`}
							href={link.href}
							key={index}
						>
							{link.name}
						</Link>
					))}
				</div>
				<div className={'flex flex-row gap-x-5 items-center'}>
					<DarkModeToggler onToggleMode={onToggleMode} />
					<div className={'flex gap-x-4'}>
						<a href={socials.linkedin}>
							<LinkedIn />
						</a>
						<a href={socials.github}>
							<GitHub />
						</a>
						<a href={socials.gmail}>
							<EmailIcon />
						</a>
					</div>
				</div>
			</div>
			<div
				className={`z-10 flex md:hidden flex-col absolute text-dark-primary dark:text-light-primary w-screen ${
					expanded
						? 'h-[380px] drop-shadow-xl bg-light-secondary dark:bg-dark-secondary'
						: 'h-[100px] bg-light-primary dark:bg-dark-primary'
				} overflow-hidden transition-all ease-in-out duration-300`}
			>
				<div className={'px-5 py-10 flex justify-between items-center'}>
					<span className={`${orionPrime.className}`}>
						<Image
							src={require(`../../assets/portfolio.svg`)}
							alt="PORTFOLIO"
							width={50}
							height={50}
							quality={100}
						/>
					</span>
					<div className={'flex gap-x-5'}>
						<DarkModeToggler onToggleMode={onToggleMode} />
						<button onClick={() => setExpanded(prev => !prev)}>
							<MenuRounded />
						</button>
					</div>
				</div>
				<div className={'flex flex-col gap-y-5 items-center'}>
					<div className={'flex flex-col gap-y-2 text-center'}>
						{links.map((link, index) => (
							<Link
								scroll={false}
								className={`${
									router.asPath.split('/')[1] === link.href
										? 'text-yellow-light dark:text-yellow-dark'
										: 'text-dark-primary dark:text-light-primary'
								} transition-all ease-out duration-300`}
								href={link.href}
								key={index}
							>
								{link.name}
							</Link>
						))}
					</div>
					<div className={'gap-x-4 flex'}>
						<a href={socials.linkedin}>
							<LinkedIn />
						</a>
						<a href={socials.github}>
							<GitHub />
						</a>
						<a href={socials.gmail}>
							<EmailIcon />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
