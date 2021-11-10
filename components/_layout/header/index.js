import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/images/logo.png";

const Header = () => {
	return (
		<div className="w-full fixed bg-black flex justify-center items-center p-4 md:p-8 z-50">
			<Link href="/">
				<Image src={Logo} height={64} width={96} />
			</Link>
		</div>
	);
};

export default Header;
