import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1>My Skill Set</h1>
            <div className="all--cards">
                <div className="cards--container" id="Skills">
                    <div className="cards--wrapper">
                        <ul className="cards--items">
                            <CardItem 
                            src="images/nodejs.png"
                            text="Angular"
                            label="Frontend"
                            path="/"
                            />
                            <CardItem 
                            src="images/react.png"
                            text="React"
                            label="Frontend"
                            path="/"
                            />
                            <CardItem 
                            src="images/javascript.png"
                            text="HTML"
                            label="Frontend"
                            path="/"
                            />
                            <CardItem 
                            src="images/sql-server.png"
                            text="CSS"
                            label="Frontend"
                            path="/"
                            />
                            <CardItem 
                            src="images/html-5.png"
                            text="Bootstrap"
                            label="Frontend"
                            path="/"
                            />
                        </ul>
                    </div>
                </div>
                <div className="cards--container">
                    <div className="cards--wrapper">
                        <ul className="cards--items">
                            <CardItem 
                            src="images/nodejs.png"
                            text="MongoDB"
                            label="Database"
                            path="/"
                            />
                            <CardItem 
                            src="images/react.png"
                            text="SQL"
                            label="Database"
                            path="/"
                            />
                            <CardItem 
                            src="images/javascript.png"
                            text="MySQL"
                            label="Database"
                            path="/"
                            />
                            {/* <CardItem 
                            src="images/sql-server.png"
                            text="Database"
                            label="Database"
                            path="/"
                            />
                            <CardItem 
                            src="images/html-5.png"
                            text="UI/UX"
                            label="Database"
                            path="/"
                            /> */}
                        </ul>
                    </div>
                </div>
                <div className="cards--container">
                    <div className="cards--wrapper">
                        <ul className="cards--items">
                            <CardItem 
                            src="images/nodejs.png"
                            text="Node"
                            label="Backend"
                            path="/"
                            />
                            <CardItem 
                            src="images/react.png"
                            text="PHP"
                            label="Backend"
                            path="/"
                            />
                            <CardItem 
                            src="images/javascript.png"
                            text="JavaScript"
                            label="Backend"
                            path="/"
                            />
                            <CardItem 
                            src="images/sql-server.png"
                            text="Express"
                            label="Backend"
                            path="/"
                            />
                            {/* <CardItem 
                            src="images/html-5.png"
                            text="UI/UX"
                            label="Backend"
                            path="/"
                            /> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
