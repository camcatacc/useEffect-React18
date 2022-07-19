import { useQuery } from "@tanstack/react-query";
import { getImages } from "../services/images";

const ReactQueryImageFetching = () => {
	const { isLoading, data } = useQuery(["images"], () => getImages(5));

	return (
		<div>
			<h1>React Query Image Fetching</h1>
			{isLoading ? (
				<div>Loading</div>
			) : (
				<>
					{data?.map((el, ind) => (
						<img src={el} key={ind} alt="Random" />
					))}
				</>
			)}
		</div>
	);
};

export default ReactQueryImageFetching;
