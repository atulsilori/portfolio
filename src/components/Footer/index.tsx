import React from 'react';
import localFont from 'next/font/local';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import Mail from '@mui/icons-material/Mail';
import socials from '@/data/socials';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Twitter } from '@mui/icons-material';

const orionPrime = localFont({
	src: '../../assets/fonts/Orionprimedemo.ttf',
});

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<AnimationOnScroll
			animateIn={'animate__fadeIn'}
			animateOnce={true}
			className={
				'w-screen py-8 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary'
			}
		>
			<div
				className={
					'border-y-2 dark:border-y-gray-300 border-y-gray-400 w-screen px-5 md:px-10 lg:px-20 py-8 flex md:flex-row flex-col gap-y-10 justify-between md:items-center mt-5'
				}
			>
				<div className={'flex flex-col gap-y-5 md:w-1/3 lg:w-1/5'}>
					<div className={'dark:text-gray-400 text-gray-600 text-sm'}>
						Atul Silori is a Frontend React developer based in Banglore, India.
					</div>
					<div className={'flex gap-x-4'}>
						<a
							className={'p-2 rounded-full border dark:border-gray-300 border-gray-600'}
							href={socials.linkedin}
						>
							<LinkedIn />
						</a>
						<a
							className={'p-2 rounded-full border dark:border-gray-300 border-gray-600'}
							href={socials.github}
						>
							<GitHub />
						</a>
						<a
							className={'p-2 rounded-full border dark:border-gray-300 border-gray-600'}
							href={socials.gmail}
						>
							<Mail />
						</a>
					</div>
				</div>
				<div
					className={
						'flex flex-col justify-end gap-y-5 dark:text-gray-400 text-gray-600 text-sm md:w-1/3 lg:w-1/5'
					}
				>
					<div>
						<div className="font-bold">CONTACT</div>
					</div>
					<div>
						<div className="flex gap-x-5">
							<span>Email:</span>
							<span>atul.silori@gmail.com</span>
						</div>
						<div className="flex gap-x-4">
							<span>Phone:</span>
							<span>+91 8800816246</span>
						</div>
					</div>
				</div>
			</div>
			<div className={'dark:text-gray-400 text-gray-600 text-center mt-5'}>
				<h3>Copyright © {year} | Atul Silori</h3>
			</div>
		</AnimationOnScroll>
	);
};

export default Footer;
