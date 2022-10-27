import React from "react"


export default function Card(props) {
    let badgeText
  
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else {
        badgeText = props.openSpots + " Left"
    }
    
    return (
        
        <div className="card">
        {/* if  badgeText exist, then display {badgeText} */} 
            {
                badgeText && <div className="card--badge">{badgeText}</div> 
            }
            <img src={require(`../images/${props.coverImg}`)} className="card--image" alt="food" />
            <div className="card--stats">
                <img src={require("../images/star.jpg")}  className="card--star" alt="star"/>
                <span>{props.rating} &nbsp;</span>
                <span className="gray">  - {props.reviewCount} Reviews &nbsp;</span>
               { props.vegan==="yes" ? <img src={require("../images/vegan.jpg")}  className="card--vegan" alt="star"/> : ""}
               { props.hot==="yes" ? <img src={require("../images/hot.jpg")}  className="card--hot" alt="star"/> : ""}
            </div>
            <a href={props.url}className="link">  <p className="bold">{props.title}</p></a>
            <p className="card--price">
                <span className="bold">{props.price} Kr</span>
            </p>
            <p> <span className="bold">Ingredient：</span> {props.ingredient}</p>
            
        </div>
       
    )
}