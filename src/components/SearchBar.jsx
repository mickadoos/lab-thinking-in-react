import { useState } from "react"

export default function SearchBar ({search}) {
    
    const [searchName, setSearchName] = useState("")

    const searcHandler = (e) => {
        // e.preventDefault();
        setSearchName(e.target.value)
        console.log('TARGET VALUE-------', e.target.value)
        search(searchName)
        console.log('searchname length-----', searchName.length)
    }

    return (
        <div>
             <label>Search</label>
             <input value={undefined} type="search" onChange={searcHandler} />
            <br/>
            <input type="checkbox" name="show" value="products" />
            <label>Only show products in store</label>
        </div>
    )
}