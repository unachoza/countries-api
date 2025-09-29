import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../api/countries";

const useAllCountriesQuery = () => {
	return useQuery({ queryKey: ["countries"], queryFn: getAllCountries });
};
export default useAllCountriesQuery;
