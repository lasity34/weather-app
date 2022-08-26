import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";
export default function Search({onSearchChange}) {

    const [search, setSearch] = useState(null)

    function loadOptions(inputValue)  {
       return fetch('/cities', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    function handleOnChange(searchData) {
        setSearch(searchData)
        onSearchChange(searchData)
    }


    return (
        <AsyncPaginate 
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    )
}