import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConsoleLogUsingUseEffect = () => {
	const navigate = useNavigate();
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		console.log("WRONG!");
	}, []);
	return (
		<>
			<h2>ConsoleLogUsingUseEffect</h2>
			<p>
				We are using a useEffect with an empty dependency array to console log something. <br />
				If you check the console, you will for sure see it just once. Right?
			</p>
			{checked ? (
				<>
					<p>
						<b>WRONG!</b>
					</p>
					<p>
						The useEffect is being called multiple times. Thus, it is printed more than once. <br />
						Even if it is printed multiple times, it's quite inoquous, right? That's correct for most cases: <br />
						<b>It does not matter that it is called more than once.</b>{" "}
					</p>
					<p>Let's see with some other scenarios, though.</p>

					<button onClick={() => navigate("regular-image-fetching")}>Click me to go to the next example</button>
				</>
			) : (
				<button onClick={() => setChecked(true)}>I have checked it</button>
			)}
		</>
	);
};

export default ConsoleLogUsingUseEffect;
