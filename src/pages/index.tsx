import { Poppins } from 'next/font/google';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skillset from '@/components/Skillset';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Resume from '@/components/Resume/Index';
import React from 'react';
import 'animate.css';
import ToastCard from '@/components/common/ToastCard';
import OpenSource from '@/components/OpenSource';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin-ext', 'latin'],
});

export default function Home() {
	const [dark, setIsDark] = React.useState(false);

	const toggleDarkMode = React.useCallback(() => setIsDark(prev => !prev), []);

	return (
		<ToastCard darkMode={dark}>
			<Head>
				<title>Atul Silori</title>
			</Head>
			<main className={`min-h-screen bg-dark-secondary w-screen ${poppins.className} ${dark && 'dark'}`}>
				<Navbar onToggleMode={toggleDarkMode} />
				<Hero />
				<Skillset />
				<Projects />
				<Experience />
				<Resume />
				<Footer />
			</main>
		</ToastCard>
	);
}
