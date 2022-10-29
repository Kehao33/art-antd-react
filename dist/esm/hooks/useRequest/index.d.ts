/// <reference types="react" />
export declare type RequestService<Params = any, Res = any> = (params?: Params) => Promise<Res>;
export interface OptionConfig<Params, Res> {
    lazy?: boolean;
    defaulParams?: Params;
    onSuccess?: (data?: Res) => void;
    onError?: (e: any) => void;
    formaResult?: (res: any) => Res;
}
export declare const useRequest: <Res = any, Params = any>(request: RequestService<Params, Res>, config?: OptionConfig<Params, Res> | undefined) => {
    lazyService: (params?: Params | undefined) => void;
    data: Res | undefined;
    error: Error | undefined;
    loading: boolean;
    setLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
