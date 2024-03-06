import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="This is a portfolio made using NextJS for Atul Silori" />
				<meta name="keywords" content="Portfolio, Atul Silori, NextJS, JavaScript, TypeScript, ReactJS" />
				<meta name="author" content="Atul Silori" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
