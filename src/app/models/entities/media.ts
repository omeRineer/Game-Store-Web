import { BaseEntity } from "./baseEntity";

export class Media extends BaseEntity{
    entityId:string;
    typeId:number;
    url:string;
    name:string;
}