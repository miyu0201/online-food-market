import React from "react"
import FoodGrid from "../images/food_grid.jpg"

export default function Header() {
    return (
        <section className="food">
            <img src={FoodGrid} className="food--photo" />
            <h1 className="food--header">Good Food for Good Moments </h1>
            <p style={{fontFamily:"Inter"}}>Buy Now, Pay Later</p>
            <p className="food--text">Enjoy our best prices and discounts</p>
        </section>
    )
}