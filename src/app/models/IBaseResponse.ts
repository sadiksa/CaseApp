export interface IBaseResponse<T> {
    status: number;
    error: string;
    data: T;
}