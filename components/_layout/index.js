import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<div className="bg-black">
			<Header />
			<main className="h-screen relative py-32 px-2">{children}</main>
		</div>
	);
};

export default Layout;
