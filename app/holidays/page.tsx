import React from 'react';

const HolidayRecipes: React.FC = () => {
    return (
        <section className="cards">
            <div className="card">
                <img src="../images/highlight2.jpg" alt="tiramisu" />
                <h3>Tiramisu</h3>
            </div>
            <div className="card">
                <img src="../images/fruitcake.jpg" alt="fruitcake" />
                <h3>Fruitcake</h3>
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
            <div className="card">
                <img src="../images/xmas_kuglof.jpg" alt="christmas bundt cake" />
                <h3>Christmas bundt cake</h3>
            </div>
        </section>
    );
}

export default HolidayRecipes;