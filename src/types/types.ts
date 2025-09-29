type FlagsType = {
	svg: string;
	png: string;
};

type NativeNameType = {
	official: string;
	common: string;
};

type NameType = {
	common: string;
	nativeName: Record<string, NativeNameType>;
	official: string;
};

type CurrencyType = {
	name: string;
	symbol: string;
};

export interface CountryType {
	flags: FlagsType;
	name: NameType;
	cca3: string;
	population: number;
	region: string;
	capital: string[];
}

export interface CountryDetailsType {
	flags: FlagsType;
	name: NameType;
	cca3: string;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	tld: string[];
	currencies: Record<string, CurrencyType>;
	currencySymbol: Record<string, CurrencyType>;
	languages: Record<string, string>;
	borders?: string[];
}
