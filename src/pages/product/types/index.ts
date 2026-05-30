import type { Status } from "../../../globals/types/type";

interface ICategory{
    id:string,
    categoryName:string,
}

export interface IProduct{
id:string,
productName:string,
description:string,
price:number,
productStock:number,
productImageUrl:string,
discount:number,
createdAt:string,
updatedAt:string,
category:ICategory
}


export interface IProducts{
    products:IProduct[],
    status:Status
}