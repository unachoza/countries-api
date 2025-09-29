import { useQuery } from "@tanstack/react-query";
import { getSingleCountry } from "../api/countries";

const useCountryQuery = (countryQuery: string) => {
	return useQuery({
		queryKey: ["country", countryQuery],
		queryFn: () => getSingleCountry(countryQuery),
	});
};

export default useCountryQuery;
