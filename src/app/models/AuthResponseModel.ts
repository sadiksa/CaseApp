import { IBaseResponse } from "./IBaseResponse";

export class AuthResponseModel implements IBaseResponse<AuthModel>{
    status!: number;
    error!: string;
    data!: AuthModel;

}

class AuthModel{
    userGroup!: number;
    token!: string;
}
