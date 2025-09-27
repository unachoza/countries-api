import { queryOptions } from "@tanstack/react-query";
const BASE_URL = "https://restcountries.com/v3.1/";

export const getAllCountries = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(`${BASE_URL}all?fields=name,cca3,capital,flags,region,population`);
	return await response.json();
};

export const getSingleCountry = async (countryQuery: string) => {
	const response = await fetch(`${BASE_URL}name/${countryQuery}`);
	return await response.json();
};

export function getCountryQueryOptions(countryQuery: string) {
	return queryOptions({
		queryKey: ["country", countryQuery],
		queryFn: () => getSingleCountry(countryQuery),
	});
}

export function getAllCountriesQueryOptions() {
	return queryOptions({
		queryKey: ["allCountries"],
		queryFn: getAllCountries,
	});
}
