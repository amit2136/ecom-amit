"use client";

import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import style from "./Product.module.css";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
  description: string;
}

export default function Product() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("https://dummyjson.com/products?limit=10");
      const data = await res.json();
      setProduct(data?.products);
    }
    fetchProduct();
  }, []);


  return (
    <div className="product-container">
      <h1>product list</h1>
      <div className={style["product-list-container"]}>
        {product?.map((product) => {
          return <ProductList key={product.id} data={product} />;
        })}
      </div>

      <Box mt={6}>

      <Typography variant="h4" className="mb2">FAQ Question</Typography>

      <Accordion className="mb2">
        <AccordionSummary><Typography>TypoAccordian 1</Typography></AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non voluptatibus obcaecati totam ullam rerum modi commodi? Aut reprehenderit voluptates beatae, omnis fugit nesciunt non nisi vero aliquam dolores corrupti</Typography></AccordionDetails>
      </Accordion>

      <Accordion className="mb2">
        <AccordionSummary><Typography>TypoAccordian 2</Typography></AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non voluptatibus obcaecati totam ullam rerum modi commodi? Aut reprehenderit voluptates beatae, omnis fugit nesciunt non nisi vero aliquam dolores corrupti</Typography></AccordionDetails>
      </Accordion>
      <Accordion className="mb2">
        <AccordionSummary><Typography>TypoAccordian 3</Typography></AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non voluptatibus obcaecati totam ullam rerum modi commodi? Aut reprehenderit voluptates beatae, omnis fugit nesciunt non nisi vero aliquam dolores corrupti</Typography></AccordionDetails>
      </Accordion>
      <Accordion className="mb2">
        <AccordionSummary><Typography>TypoAccordian 4</Typography></AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non voluptatibus obcaecati totam ullam rerum modi commodi? Aut reprehenderit voluptates beatae, omnis fugit nesciunt non nisi vero aliquam dolores corrupti</Typography></AccordionDetails>
      </Accordion>

      </Box>

    </div>
  );
}
