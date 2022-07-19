import React, { useEffect } from "react";

const ConsoleLogUsingUseEffect = () => {
	useEffect(() => {
		console.log("This will only be printed once, right? RIGHT?");
	}, []);
	return <div>ConsoleLogUsingUseEffect</div>;
};

export default ConsoleLogUsingUseEffect;
