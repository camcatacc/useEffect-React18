import { useEffect, useState } from "react";
import { getImages } from "../services/images";

const RegularImageFetchingUsingUseEffect = () => {
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
			<h1>React Query Image Fetching</h1>
			{loading ? (
				<div>Loading</div>
			) : (
				<>
					{images.map((image, ind) => (
						<img src={image} alt="randomImage" key={ind} />
					))}
				</>
			)}
		</div>
	);
};

export default RegularImageFetchingUsingUseEffect;
