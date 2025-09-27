type flags = {
	svg: string;
	png: string;
};

interface LooseObject {
	[key: string]: string;
}

type NameObjectType = {
	common: string;
	nativeName: LooseObject;
	official: string;
};

export interface CardProps {
	flags: flags;
	name: NameObjectType;
	population: number;
	region: string;
	capital: string[];
}

type FlagsType = {
	svg: string;
	png: string;
};

type CurrenciesType = {
	code: string;
	name: string;
	symbol: string;
};

type LanguageType = {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
};

type NameType = {
	common: string;
	nativeName: LooseObject;
	official: string;
};

export interface PageProps {
	flags: FlagsType;
	name: NameType;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	tld: string[];
	currencies: LooseObject;
	languages: LooseObject;
	borders: string[];
}
