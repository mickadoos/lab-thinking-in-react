import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function ProductsPage () {
    const [products, setProducts] = useState(jsonData);

    const searchProduct = (productName) => {
        if(productName.length > 0){

            productName = productName.toLowerCase();
            const resultProduct = jsonData.filter(product => {
                product.name = product.name.toLowerCase();
                // console.log('JSONDATA-----', jsonData)
                return product.name.includes(productName)
            })
            setProducts(resultProduct);
        }
      }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar search={searchProduct} />
            <ProductTable productsProp={products}/>
        </div>
    )
}