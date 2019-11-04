export interface I18n {
    translations: any;
    locale: string;
    availableLocales: { [key: string]: string }[]
}