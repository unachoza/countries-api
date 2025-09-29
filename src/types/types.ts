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
	nativeName: NativeNameType;
	official: string;
};

type CurrencyType = {
	name: string;
	symbol: string;
};

export interface CardProps {
	flags: FlagsType;
	name: NameType;
	population: number;
	region: string;
	capital: string[];
}

export interface CountryDetailsType {
	flags: FlagsType;
	name: NameType;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	tld: string[];
	currencies: Record<string, CurrencyType>;
	languages: Record<string, string>;
	borders?: string[];
}
