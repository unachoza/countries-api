import { useQuery } from "@tanstack/react-query";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Input from "./Components/Form/Input/Input";
import DropDownMenu from "./Components/Form/DropDown/DropDown";
import "./App.css";
import { useState, type ChangeEvent, type FormEvent } from "react";

function App() {
	const [search, setSearch] = useState<string>("");
	const [region, setRegion] = useState<string>("all");
	const regionsTypes = ["Africa", "America", "Europe", "Asia", "Oceana"];

	const getSpain = async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const response = await fetch("https://restcountries.com/v3.1/name/spain");
		return await response.json();
	};

	const { data, isPending } = useQuery({
		queryKey: ["countries"],
		queryFn: getSpain,
	});

	// const handleSearch = (e:FormEvent) => {
	//   const searchQuery = e.target.value
	// }

	function handleSearch(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value;
		setSearch(newValue);
	}

	return (
		<>
			<div className="header">
				<h1>Where in the World?</h1>
			</div>
			<div className="filters-container">
				<Input
					id="search"
					label="search"
					name="search"
					type="text"
					value={search}
					placeholder="Search for a Country ..."
					handleChange={handleSearch}
				/>
				<DropDownMenu setValue={setRegion} values={regionsTypes} label="Filter by Region" />
			</div>
			<div className="card">{isPending ? <LoadingSpinner /> : JSON.stringify(data)}</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
