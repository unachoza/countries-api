import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import ReactQueryProvider from "./providers/ReactQueryProvider.jsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<ReactQueryProvider>
				<App />
			</ReactQueryProvider>
		</BrowserRouter>
	</StrictMode>
);
