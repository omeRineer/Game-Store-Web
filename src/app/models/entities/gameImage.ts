import { BaseEntity } from "./baseEntity";

export class GameImage extends BaseEntity{
    gameId:string;
    name:string;
    url:string;
    priority:number;
    createDate:Date;
    editDate:Date;
}