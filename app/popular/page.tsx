import React from 'react';

const PopularRecipes: React.FC = () => {
    return (
        <section className="cards">
            <div className="card">
                <img src="../images/triple_cookies.jpg" alt="triple chocolate cookies" />
                <h3>Triple chocolate cookies</h3>
            </div>
            <div className="card">
                <img src="../images/highlight2.jpg" alt="tiramisu" />
                <h3>Tiramisu</h3>
            </div>
            <div className="card">
                <img src="../images/icecream_cake.jpg" alt="fried ice cream cake" />
                <h3>Fried ice cream cake</h3>
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
                <img src="../images/redvelvet_bites.jpg" alt="red velvet bites" />
                <h3>Red velvet bites</h3>
            </div>
            <div className="card">
                <img src="../images/schwartzwald.jpg" alt="black forest cake" />
                <h3>Black forest cake</h3>
            </div>
            <div className="card">
                <img src="../images/xmas_blondies.jpeg" alt="christmas blondies" />
                <h3>Christmas blondies</h3>
            </div>
        </section>
    );
}

export default PopularRecipes;