import React from 'react';

const RecipeCards: React.FC = () => {
    return (
        <section className="cards">
            <div className="card">
                <img src="../images/double_cookies.jpg" alt="double chocolate cookies" />
                <h3>Double chocolate cookies</h3>
            </div>
            <div className="card">
                <img src="../images/triple_cookies.jpg" alt="triple chocolate cookies" />
                <h3>Triple chocolate cookies</h3>
            </div>
            <div className="card">
                <img src="../images/highlight1.jpg" alt="banana muffins" />
                <h3>Banana chocolate muffins</h3>
            </div>
            <div className="card">
                <img src="../images/fruitcake.jpg" alt="fruitcake" />
                <h3>Fruitcake</h3>
            </div>
            <div className="card">
                <img src="../images/malina_mousse.jpg" alt="raspberry mousse" />
                <h3>Raspberry mousse</h3>
            </div>
            <div className="card">
                <img src="../images/panna_cotta.jpeg" alt="panna cotta" />
                <h3>Panna cotta</h3>
            </div>
            <div className="card">
                <img src="../images/pb_cups.jpg" alt="peanut butter cups" />
                <h3>Peanut butter cups</h3>
            </div>
            <div className="card">
                <img src="../images/pb_cups2.png" alt="peanut butter cups" />
                <h3>Peanut butter cups</h3>
            </div>
            <div className="card">
                <img src="../images/redvelvet_bites.jpg" alt="red velvet bites" />
                <h3>Red velvet bites</h3>
            </div>
            <div className="card">
                <img src="../images/xmas_blondies.jpeg" alt="christmas blondies" />
                <h3>Christmas blondies</h3>
            </div>
            <div className="card">
                <img src="../images/xmas_kuglof.jpg" alt="christmas bundt cake" />
                <h3>Christmas bundt cake</h3>
            </div>
        </section>
    );
}

export default RecipeCards;