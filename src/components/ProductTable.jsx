import ProductRow from "./ProductRow";

export default function ProductTable ({productsProp}) {

    const displayProducts = () => {
        const showProducts = productsProp.map(product => {
            return <ProductRow key={product.id} name={product.name} price={product.price} inStock={product.inStock}/>
        })
        return showProducts;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {displayProducts()}
                </tbody>
            </table>
        </div>
    )
}