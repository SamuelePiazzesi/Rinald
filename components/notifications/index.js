import React, { useEffect } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifications } from "../../constants";

const Notifications = () => {
	useEffect(() => {
		const interval = setInterval(() => {
			toast(_.sample(notifications), {
				icon: "🔥",
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
		}, 15000);
		return () => clearInterval(interval);
	}, []);

	return (
		<ToastContainer
			position="top-center"
			autoClose={4000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss={false}
			draggable
			pauseOnHover
			transition={Slide}
			theme="dark"
		/>
	);
};

export default Notifications;
