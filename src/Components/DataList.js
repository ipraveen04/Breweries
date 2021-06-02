import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataCard from './DataCard'
function DataList() {

    const [state, setState] = useState([])

    const [search, setSearch] = useState('')


    const api = `https://api.openbrewerydb.org/breweries`

    const apiData = () => {
        axios.get(api)
            .then(res => {
                console.log(res.data)
                setState([...res.data])
            })
            .catch(err => {
                console.log('error' + err);
            })
    }

    useEffect(() => {
        apiData();
    }, [])

    return (
        <>

            <div className="header text-center">
                <h3>Search by Type or City</h3>
                <input type="text" placeholder="Search by type or city ..."
                    className="text" onChange={e => setSearch(e.target.value)} />
            </div>

            <div className="items">
                <div className="items-container">

                    {state.filter((val) => {
                        if (search === "") {
                            return val
                        } else if (val.city.toLowerCase().includes(search.toLowerCase()) ||
                            val.brewery_type.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((ele) => {
                        return (
                            <DataCard key={ele.id} {...ele} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DataList;
