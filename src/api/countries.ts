import { queryOptions } from "@tanstack/react-query";
import { type CountryType, type CountryDetailsType } from "../types/types";
const BASE_URL = "https://restcountries.com/v3.1/";

const normalizeCountryData = (country: CountryType) => ({
	name: country.name.common,
	cca3: country.cca3,
	flags: country.flags.png,
	population: formatNumber(country.population),
	region: country.region,
	capital: country.capital[0] || "N/A",
});

const normalizeCountryDetailsData = (country: CountryDetailsType) => {
	const nativeNameEntries = Object.entries(country.name.nativeName);
	const lastNativeName = nativeNameEntries[nativeNameEntries.length - 1]?.[1]?.common;

	return {
		name: country.name.common,
		code: country.cca3,
		flags: country.flags.svg,
		nativeName: lastNativeName,
		population: formatNumber(country.population),
		region: country.region,
		subregion: country.subregion,
		capital: country.capital[0],
		topLevelDomain: country.tld,
		currencies: Object.values(country.currencies).map((currency: any) => currency.name),
		currencySymbol: Object.values(country.currencies).map((currency: any) => currency.symbol),
		languages: Object.values(country.languages).map((language) => language),
		borders: country.borders,
	};
};

const normalizeCodeData = (country: any) => {
	console.log(country);
	return {
		code: country.cca3,
		countryName: country.name.common,
	};
};

const formatNumber = (number: number, locale = "en-US") => {
	return new Intl.NumberFormat(locale).format(number);
};

export const getAllCountries = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(`${BASE_URL}all?fields=name,cca3,capital,flags,region,population`);
	const data = await response.json();
	return data.map((countrydata: CountryType) => normalizeCountryData(countrydata));
};

export const getSingleCountry = async (countryQuery: string) => {
	const response = await fetch(`${BASE_URL}name/${countryQuery}`);
	const data = await response.json();
	return data.map((singleCountry: any) => normalizeCountryDetailsData(singleCountry));
};

export const getCountryByCode = async (code: string) => {
	const response = await fetch(`${BASE_URL}alpha/${code}?fields=name,cca3`);
	const data = await response.json();
	return data.map((data: any) => normalizeCodeData(data));
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
