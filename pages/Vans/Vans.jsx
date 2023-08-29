import React, { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {

    const [vanData, setVanData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVanData(data.vans))
    }, [])
    
    // console.log(vanData)
    const typeFilter = searchParams.get("type")
    const filteredVans = typeFilter 
        ? vanData.filter(van => van.type.toLowerCase() === typeFilter) 
        : vanData

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    const vansDisplay = filteredVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={van.id} 
                state={{ 
                    search: `?${searchParams.toString()}`, 
                    type: typeFilter}}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
                <button onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                <button onClick={() => handleFilterChange("type", "luxury")} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                {typeFilter 
                    ? (<button onClick={() => handleFilterChange("type", null)}  className="van-type clear-filters">Clear</button>) 
                    : null}
            </div>
            <div className="van-list">
                {vansDisplay}
            </div>
        </div>
    )
}

/**
 * {
    * id: "1", 
    * name: "Modest Explorer", 
    * price: 60, 
    * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", 
    * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
    * type: "simple"
 * }
 */