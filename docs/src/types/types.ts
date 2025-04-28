export interface IData_SnippetNews {
	ID: number
	TI: string
	AB: string
	URL: string
	DOM: string
	DP: string
	LANG: string
	REACH: number
	KW: IData_TagItem[]
	AU: string[]
	CNTR: string
	CNTR_CODE: string
	SENT: string
	TRAFFIC: IData_TrafficItem[]
	FAV: string
	HIGHLIGHTS: string[]
}

export interface IData_TagItem {
	value: string
	count: number
}

export interface IData_TrafficItem {
	value: string
	count: number
}

export interface INewsContent {
	title: string
	url: string
	domain: string
	country: string
	countryCode: string
	language: string
	authors: string[]
	highlights: string[]
}

export interface INewsDuplicates {
	data: {
		date: string
		reach: number
		title: string
		url: string
		domain: string
		country: string
		countryCode: string
		authors: string[]
	}
}

export interface INewsHeader {
	date: string
	reach: number
	traffic: IData_TrafficItem[]
	sentiment: string
}

export interface INewsKeywords {
	keywords: IData_TagItem[]
}

export interface INewsMeta {
	traffic: IData_TrafficItem[]
}

export interface INewsSnippet {
	data: IData_SnippetNews
}

export interface INewsSource {
	domain: string
	country: string
	countryCode: string
	language: string
	authors: string[]
}
