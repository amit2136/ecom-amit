"use client";

import Link from "next/link";
import  style  from "./ProductList.module.css";

type Product ={
    id: number,
    title: string,
    images : string[],
    price: number,
    rating:number,
    description : string
}

interface ProductDetailProps{
    data : Product
}

export default function ProductList({data} :ProductDetailProps){
    const {id,images, title,price,description} = data;
    console.log('data', data);
    return (
        <div className={style.productItem}>
            <Link key={id} href={`/products/${id}`}>
            <img  src={images[0]} alt="" />
            <h4>RS.<span>{price}</span></h4>
            <h4>{title}</h4>
            </Link>
        </div>
    )
}