// Código em inglês
import { useState } from 'react';

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00',
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00',
  },
];

// ListProduto to listOfProducts
export function listOfProducts() {
  // filteredProdutos to filteredProducts
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // searchProduto to searchProduct
  function searchProduct(search: string) {
    // filtrado to filtered
    const filtered = productList.filter((product) =>
      product.title.includes(search)
    );

    setFilteredProducts(filtered);
  }

  return (
    <div>
      <input type='text' onChange={(e) => searchProduct(e.target.value)} />

      {/* produto to product */}
      {filteredProducts.map((product) => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
