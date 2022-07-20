import { v4 as uuidv4 } from "uuid";

export const getImages = async (num: number): Promise<string[]> => {
	debugger;
	const images = [...Array(num)].map(() => `https://picsum.photos/200/300?random=${uuidv4()}`);
	return fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({ images }),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
		.then((response) => response.json())
		.then((response) => response.images);
};
