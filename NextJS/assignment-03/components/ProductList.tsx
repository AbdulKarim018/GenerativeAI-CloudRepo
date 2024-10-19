import Image from "next/image";
import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <div className="flex items-center justify-center gap-4 max-md:flex-col">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center gap-4 rounded-xl bg-background p-4"
        >
          <div className="rounded-full bg-gray-400/20 p-4">
            <Image src="/bell.png" alt={product.title} width={35} height={35} />
          </div>
          <h3>{product.title}</h3>
          <p className="w-3/4 text-center text-sm leading-relaxed">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );
}
