export default function ProductRow ({name, price, inStock}) {
    return (
        
        <tr>
            <td>{inStock? name: <span style={{color: "red"}}>{name}</span>}</td>
            <td>{price}</td>
        </tr>
    
    )
}