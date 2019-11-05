export interface Localization {
  translations: { [key: string]: string };
  selectedLanguage: string;
  languages: { [key: string]: string };
}

export interface LocalizationState {
  localization: Localization;
  loading: boolean;
  error: string | null;
}

export interface Language {
  key: string;
  value: string;
}
