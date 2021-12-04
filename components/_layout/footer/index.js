import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/images/logo.png";

const Footer = () => {
	return (
		<div className="w-full bg-black text-gray-400 py-4 sm:py-8 px-4 md:px-8 flex flex-col justify-center items-center text-center text-xs md:text-base">
			<p>
				Questo sito web non ha finalità di lucro ed a scopo puramente
				informativo
				<span className="mx-2">-</span>
				<span>👨 Rinald Sefa ©️ 2021</span>
				<span className="mx-2">-</span>
				<span>✉️ Text me</span>
			</p>
		</div>
	);
};

export default Footer;
