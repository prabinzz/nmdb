import { useState, useEffect } from "react";

export default function Toast({ message, type, onClose }) {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
			onClose();
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, [onClose]);

	return (
		<div
			className={`toast ${
				show ? "show" : ""
			} fixed z-50 right-4 top-4 rounded-md flex items-center px-4 py-2 gap-4 ${
				type == "error"
					? "bg-gradient-to-r from-red-500 to-red-600"
					: "bg-gradient-to-r from-green-500 to-green-600"
			}`}
		>
			<div className="toast-message font-bold text-white">{message}</div>
			<button
				className="toast-close w-6 h-6 p-0 m-0 rounded-full bg-white text-black hover:bg-gray-300 transition-colors duration-300"
				onClick={() => setShow(false)}
			>
				&#x2716;
			</button>
		</div>
	);
}
