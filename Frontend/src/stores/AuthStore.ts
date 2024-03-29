import { makeAutoObservable, runInAction } from 'mobx';
import { ComponentLoggingConfig } from '@utils/ComponentLoggingConfig';
import { Constants } from '@utils/Constants';
import { RootStore } from './RootStore';
import { UserRegistrationDTO } from '@models/DTO/UserRegistrationDTO';
import { AuthService } from '@services/AuthService';
import { UserLoginDTO } from '@models/DTO/UserLoginDTO';
import { AuthStateProvider } from '@services/AuthStateProvider';
import { AuthState } from '@models/types/AuthState';
import { WebAPIResponse } from '@models/types/WebApiResponse';

export class AuthStore {
    private static _Instance: AuthStore;
    private rootStore: RootStore;
    private prefix: string = `%c[AuthStore]`;
    private color: string = ComponentLoggingConfig.DarkPurple;
    private loading: boolean = false;
    private loaded: boolean = false;
    private authService: AuthService;
    private _userAuthenticated: boolean = false;
    private _authState: AuthState;
    private authStateProvider: AuthStateProvider;


    constructor(_rootStore: RootStore, _authService: AuthService) {
        this.authService = _authService;
        this.rootStore = _rootStore;
        makeAutoObservable(this);
    }

    public async init(): Promise<boolean> {
        runInAction(() => {
            this.loading = true;
        });
        this.authStateProvider = new AuthStateProvider();
        // Look for previous token and use it to sign in if possible
        const authed = await this.authStateProvider.trySilentAuthenticateUser();
        if (authed) {
            runInAction(() => {
                this._authState = authed;
            });
            this.setUserAuthed();
        }

        runInAction(() => {
            this.loading = false;
            this.loaded = true;
        })
        if (Constants.loggingEnabled) {
            console.log(`${this.prefix} initialized!`, this.color);
        }
        return this.loaded;
    }

    public static GetInstance(_rootStore: RootStore, _authService: AuthService): AuthStore {
        if (!AuthStore._Instance) {
            AuthStore._Instance = new AuthStore(_rootStore, _authService);
        }
        return AuthStore._Instance;
    }

    public get isLoaded(): boolean {
        return this.loaded;
    }

    public get isLoading(): boolean {
        return this.loading;
    }

    public get userAuthenticated(): boolean {
        return this._userAuthenticated;
    }

    public get authState(): AuthState {
        return this._authState;
    }

    public signOut(): void {
        const authState = this.authStateProvider.signOut();
        runInAction(() => {
            this._authState = authState;
            this._userAuthenticated = false;
        });
    }

    private setUserAuthed(): void {
        runInAction(() => {
            this._userAuthenticated = true;
        })
    }

    public async registerUser(userRegistrationDTO: UserRegistrationDTO): Promise<WebAPIResponse> {
        return await this.authService.registerUser(userRegistrationDTO);
    }

    public async login(userLoginDTO: UserLoginDTO): Promise<boolean> {
        let responseToken;
        try {
            responseToken = await this.authService.login(userLoginDTO);

        } catch (err) {
            console.error(err);
        }
        if (responseToken && responseToken !== "") {
            this._authState = this.authStateProvider.signIn(responseToken);
            this.setUserAuthed();
            return true;
        }
        return false;
    }
}
