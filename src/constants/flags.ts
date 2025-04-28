export const FLAGS_API_URL = 'https://flagcdn.com/w20/'

export const formFlagUrl = (countryCode: string) =>
  `${FLAGS_API_URL}${countryCode.toLowerCase()}.png`
