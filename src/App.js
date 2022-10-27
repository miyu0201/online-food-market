import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                title={item.title}
                price= {item.price}
                coverImg= {item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                ingredient={item.ingredient}
                openSpots= {item.openSpots}
                vegan={item.vegan}
                hot={item.hot} 
                url={item.url}              
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}