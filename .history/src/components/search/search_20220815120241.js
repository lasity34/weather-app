import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"

export default function Search({onSearchChange}) {

    const [search, setSearch] = useState(null)

    function handleOnChange() {
        setSearch(searchData)
        onSearchChange(searchData)
    }


    return (
        <AsyncPaginate 
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        />
    )
}