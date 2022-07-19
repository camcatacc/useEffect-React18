import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ConsoleLogUsingUseEffect from "./components/ConsoleLogUsingUseEffect";
import RegularImageFetchingUsingUseEffect from "./components/RegularImageFetchingUsingUseEffect";
import ReactQueryImageFetching from "./components/ReactQueryImageFetching";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Create Query Client
const queryClient = new QueryClient();

root.render(
	// Important: Strict Mode
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="console" element={<ConsoleLogUsingUseEffect />} />
						<Route path="regular-image-fetching" element={<RegularImageFetchingUsingUseEffect />} />
						<Route path="react-query-image-fetching" element={<ReactQueryImageFetching />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
