import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="countries/:countryName" element={<CountryPage />} />
		</Routes>
	);
}

export default App;
