import { useState } from "react"

export default function SearchBar ({searchProduct}) {
    
    const [searchName, setSearchName] = useState("")

    const searcHandler = (e) => {
        // e.preventDefault();
        setSearchName(e.target.value)
        console.log('TARGET VALUE-------', e.target.value)
        searchProduct(searchName)
    }

    return (
        <div>
             <label>Search</label>
             <input value={undefined} type="text" onChange={searcHandler} />
            <br/>
            <input type="checkbox" id="show" name="show" value="products" />
            <label forHtml="show">Only show products in store</label>
        </div>
    )
}