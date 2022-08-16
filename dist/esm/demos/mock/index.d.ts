export declare type MockData = {
    id: string;
    name: string;
    age: number;
    gender: string;
    hobby: string;
    bestFirend: {
        name: string;
        age: number;
    };
    description: string;
};
export declare type MockConfig = {
    len?: number;
    timeout?: number;
    throwErr?: boolean;
};
export declare const getData: (config?: MockConfig | undefined) => Promise<MockData[]>;
