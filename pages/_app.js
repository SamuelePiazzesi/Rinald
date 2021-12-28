import "../assets/styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/logo.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Scopri chi sono, cosa faccio e come lo faccio!
"
				></meta>
				<meta
					property="og:title"
					content="Rinald Sefa - Creative & Art Director"
					key="ogtitle"
				/>
				<meta
					property="og:description"
					content="Scopri chi sono, cosa faccio e come lo faccio!"
					key="ogdesc"
				/>
				<meta property="og:image" content="/logo.png" key="ogimage" />
				<title>Rinald Sefa - Creative & Art Director</title>
			</Head>

			<Head>
				<script type="text/javascript" src="/static/clearbit.js" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
