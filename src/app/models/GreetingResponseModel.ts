import { IBaseResponse } from "./IBaseResponse";

export class GreetingResponseModel implements IBaseResponse<string>{
    status!: number;
    error!: string;
    data!: string;

}