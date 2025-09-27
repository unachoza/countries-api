import { queryOptions } from "@tanstack/react-query";
import { type CardProps, type PageProps } from "../types/types";
const BASE_URL = "https://restcountries.com/v3.1/";

const normalizeCountryData = (country: CardProps) => ({
	name: country.name.common,
	flags: country.flags.png,
	population: country.population,
	region: country.region,
	capital: country.capital[0],
});

const normalizeCountryDetailsData = (country: PageProps) => ({
	name: country.name.common,
	flags: country.flags.svg,
	nativeName: Object.entries(country.name.nativeName)[Object.entries(country.name.nativeName).length - 1][1]?.common,
	population: country.population,
	region: country.region,
	subregion: country.subregion,
	capital: country.capital[0],
	topLevelDomain: country.tld,
	currencies: Object.values(country.currencies).map((currency: any) => currency.name),
	languages: Object.values(country.languages).map((language) => language),
	borders: country.borders,
});

export const getAllCountries = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(`${BASE_URL}all?fields=name,cca3,capital,flags,region,population`);
	const data = await response.json();
	return data.map((countrydata: CardProps) => normalizeCountryData(countrydata));
};

export const getSingleCountry = async (countryQuery: string) => {
	const response = await fetch(`${BASE_URL}name/${countryQuery}`);
	const data = await response.json();
	console.log({ data });
	return data.map((singleCountry: any) => normalizeCountryDetailsData(singleCountry));
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
