import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1>My Skill Set</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <CardItem 
                        src="images/img-1.webp"
                        text="Node"
                        label="Backend"
                        path="/"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="React"
                        label="Frontend"
                        path="/"
                        />
                    </ul>
                    <ul className="cards--items">
                        <CardItem 
                        src="images/img-3.webp"
                        text="Mongo"
                        label="Database"
                        path="/"
                        />
                        <CardItem 
                        src="images/img-4.webp"
                        text="UI/UX"
                        label="Design"
                        path="/"
                        />
                        <CardItem 
                        src="images/img-3.jpg"
                        text="UI/UX"
                        label="Design"
                        path="/design"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
