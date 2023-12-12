
import { fetchData, useQueryFecth } from "../../hooks/FeatchHook";
import { useEffect, useState } from "react";
import Content from "../ContentComponent/Content";
function Search() {
    const [searchInput, setSearchInput] = useState("")
 
    return (<>
        <div className="container mx-auto p-4">
            <div className="mt-8">
                <input type="text" id="searchInput" onChange={(e) => setSearchInput(e.target.value)} placeholder="Search GitHub..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            {<Content search={searchInput}/>}
        </div>

    </>)
}
export default Search