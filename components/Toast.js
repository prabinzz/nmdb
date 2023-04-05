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
			} absolute right-4 top-4  rounded-md flex items-center px-4 py-2 gap-4 ${
				type == "error" ? "bg-red-500" : "bg-c-primary"
			}`}
		>
			<div className="toast-message">{message}</div>
			<button
				className="toast-close p-1 rounded-full bg-white text-black"
				onClick={() => setShow(false)}
			>
				&#x2716;
			</button>
		</div>
	);
}
