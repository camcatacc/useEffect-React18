import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImages } from "../services/images";

const RegularImageFetchingUsingUseEffect = () => {
	const navigate = useNavigate();
	const [images, setImages] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getImages(5).then((res) => {
			setImages(res);
			setLoading(false);
		});
	}, []);

	return (
		<div>
			<h1>Regular Image Fetching using useEffect</h1>
			{loading ? (
				<div>Loading</div>
			) : (
				<>
					{images.map((image, ind) => (
						<img src={image} alt="randomImage" key={ind} />
					))}
				</>
			)}
			<p>
				This time, we are using a useEffect with an empty dependency array to, in theory, just get the images once <br />
				Have you seen some <b>image flickering?</b> <br />
				Let's see why!
			</p>
			<p>
				<b>Open the Developer tools and refresh the page.</b> <br />
				Since we have added some debuggers when the network call is done, we will see what happens.
			</p>
			<button onClick={() => window.location.reload()}>Refresh the page</button>
			<p>
				The debugger was called twice! This means that the <b>useEffect was called also twice.</b> <br />
				Check the network tab and you will see more than just 5 network calls. There should be 10 or more. <br />
			</p>
			<hr />
			<p>
				Before, we were just printing something twice. But now it is far more relevant. We are getting two times the required images. <br />
				<b>And this has quite an impact on the app performance.</b> What if instead of 5 images, they were 100? <br />
				This can become a problem quite quickly.
			</p>
			<button onClick={() => navigate("../react-query-image-fetching")}>Let's see a possible option to fix it</button>
		</div>
	);
};

export default RegularImageFetchingUsingUseEffect;
