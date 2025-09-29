import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import AppLayout from "./layout/AppLayout"

function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path="countries/:countryName" element={<CountryPage />} />
			</Route>
		</Routes>
	);
}

export default App;
