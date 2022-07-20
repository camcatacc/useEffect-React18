import { useQuery } from "@tanstack/react-query";
import { getImages } from "../services/images";

const ReactQueryImageFetching = () => {
	const { isLoading, data } = useQuery(["images"], () => getImages(5), { refetchOnWindowFocus: false, refetchOnMount: false });

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
			<p>
				Now, instead of using the useEffect with an empty dependency array, we are using the{" "}
				<b>
					<a href="https://tanstack.com/query/v4" target="_blank" rel="noreferrer">
						react-query library.
					</a>
				</b>
				<br />
				You will now notice that <b>there is no flickering.</b> Why?
			</p>
			<p>
				<b>Open the Developer tools and refresh the page.</b> <br />
				Since we have added some debuggers when the network call is done, we will see what happens.
			</p>
			<button onClick={() => window.location.reload()}>Refresh the page</button>
			<p>
				Have you noticed that the debugger was called just once? <br />
				And if you check the network tab, <b>only 5 calls are done.</b> <br />
			</p>
			<hr />
			<p>
				That's because the network call is being <b>cached by react-query.</b> <br />
				Even if the component is unmounted or we lose focus of the window, it won't be called again. <br />
				And this would be an option to fix useEffect being called multiple times :)
			</p>
		</div>
	);
};

export default ReactQueryImageFetching;
