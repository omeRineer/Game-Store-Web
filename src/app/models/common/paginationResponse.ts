export class PaginationResponse<TData>{
    page:number;
    size:number;
    totalCount:number;
    data:TData[]
}