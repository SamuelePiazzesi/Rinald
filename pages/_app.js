import "../assets/styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/logo.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="description" content="Art and Creative director"></meta>
				<meta property="og:title" content="Rinald Sefa" key="ogtitle" />
				<meta
					property="og:description"
					content="Art and Creative director"
					key="ogdesc"
				/>
				<meta property="og:image" content="/logo.png" key="ogimage" />
				<title>Rinald Sefa</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
