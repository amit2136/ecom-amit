"use client";

import { useState, useEffect } from "react";
import styles from "./Pdp.module.css";

import { Button, Card, Paper, Stack } from "@mui/material";

interface PDPProps {
  productId: string;
}

interface Product {
  title: string;
  images: string[];
  price: string;
  rating: string;
}

export default function PDP({ productId }: PDPProps) {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState<Product | null>(null);

  console.log("productID", productId);

  useEffect(() => {
    const getProductDetail = async function () {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const product = await res.json();
      setProduct(product);
    };
    getProductDetail();
  }, [productId]);

  if (!product) return null;

  console.log("product", product);
  return (
    <div className={styles["pdp-container-page"]}>
      <div className={styles["header"]}>
        <span className={styles["cart-icon"]} role="img" aria-label="cart">
          🛒
          <span className={styles["cart-count"]}>{cart.length}</span>
        </span>
      </div>
      <Stack className={styles["pdp-container"]}>
        <Stack direction="row" spacing={5}>
          <div className={styles["pdp_image"]}>
            <img src={product?.images[0]} alt="" />
          </div>
          <Paper variant="elevation" className={styles["pdp_detail"]}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>Rating : {product.rating}</p>
            <div className={styles["add-to-cart"]}>
              <Button>Add</Button>
            </div>
          </Paper>
        </Stack>
      </Stack>
    </div>
  );
}
