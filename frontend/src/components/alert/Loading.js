import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
	return (
		<div
			className="position-fixed w-100 h-100 loading"
			style={{
				background: "#3f4156",
				color: "white",
				top: 0,
				left: 0,
				zIndex: 50,
			}}
		>
			<Loader type="Rings" color="white" height={100} width={100} />
			<span>Loading...</span>
		</div>
	);
};

export default Loading;
