import React from 'react'

function DataCard({ name, city, brewery_type, state, country }) {
    return (
        <>

            <div className="items-info">
                <div className="name">
                    <h4>{name}</h4>
                </div>

                <div className="city">
                    {city}
                </div>

                <div className="type">
                    {brewery_type}
                </div>
                <div className="state">
                    {state}
                </div>
                <div className="country">
                    {country}
                </div>
            </div>
            <hr />
        </>
    )
}

export default DataCard;
