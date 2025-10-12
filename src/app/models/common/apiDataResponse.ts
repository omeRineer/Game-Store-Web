import { ApiResponse } from "./apiResponse";

export class ApiDataResponse<TData> extends ApiResponse{
    data : TData
}