import { makeAutoObservable, runInAction } from 'mobx';
import { ComponentLoggingConfig } from '@utils/ComponentLoggingConfig';
import { RootStore } from './RootStore';
import { Constants } from '@utils/Constants';
import { ILocale } from '@utils/ILocale';
import DKLocale from '@utils/DKLocale';
import ENLocale from '@utils/ENLocale';

export class LanguageStore {

    private static _Instance: LanguageStore;
    private rootStore: RootStore;
    private prefix: string = `%c[LanguageStore]`;
    private color: string = ComponentLoggingConfig.DarkSalmon;
    private loaded: boolean = false;
    private locales: Map<string, ILocale> = new Map<string, ILocale>();
    private _currentLanguage: string;
    private _previousLanguageSet: string;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;
        makeAutoObservable(this);
    }

    public async init(): Promise<boolean> {
        runInAction(() => {
            // Load available languages
            this.locales.set("da_DK", new DKLocale());
            this.locales.set("en_US", new ENLocale());
        })

        runInAction(() => {
            // Reads values from localstorage to determine previously set preffered language by user ->
            // If no preffered language was set by user -> default to da-DK locale
            this._previousLanguageSet = localStorage['locale'];
            this.setCurrentLanguage(this._previousLanguageSet ? this._previousLanguageSet : 'da_DK');
            this.loaded = true;
        })
        if (Constants.loggingEnabled) {
            console.log(`${this.prefix} initialized!`, this.color);
        }
        return this.loaded;
    }

    public static GetInstance(_rootStore: RootStore): LanguageStore {
        if (!LanguageStore._Instance) {
            LanguageStore._Instance = new LanguageStore(_rootStore);
        }
        return LanguageStore._Instance;
    }

    private setCurrentLanguage(language: string): void {
        this._currentLanguage = language;
        // Set local storage language setting
        localStorage.setItem('locale', language);
    }

    public toggleLanguage(): void {
        let lang: string = "";
        if (this._currentLanguage === "da_DK") {
            lang = "en_US";
        } else {
            lang = "da_DK"
        }
        this.setCurrentLanguage(lang);
    }

    public setLanguage(language: string): void {
        runInAction(() => {
            this.setCurrentLanguage(language);
        })
    }

    public get isLoaded(): boolean {
        return this.loaded;
    }

    public get currentLanguage(): ILocale {
        return this.locales.get(this._currentLanguage);
    }

    public getCurrentLanguageCode(): "da_DK" | "en_US" | "" {
        if (this.locales.get(this._currentLanguage) instanceof DKLocale) {
            // Dansk
            return "da_DK";
        }
        if (this.locales.get(this._currentLanguage) instanceof ENLocale) {
            // English
            return "en_US";
        }
        return "";
    }

    public getLanguages(): string[] {
        let languages: string[] = [];
        this.locales.forEach((value: ILocale, key: string) => {
            languages.push(key);
        })
        return languages;
    }
}
