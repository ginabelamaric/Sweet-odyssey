import React from 'react';

const HealthyRecipes: React.FC = () => {
    return (
        <section className="cards">
            <div className="card">
                <img src="../images/highlight1.jpg" alt="banana muffins" />
                <h3>Banana chocolate muffins</h3>
            </div>
            <div className="card">
                <img src="../images/fruitcake.jpg" alt="fruitcake" />
                <h3>Fruitcake</h3>
            </div>
            <div className="card">
                <img src="../images/lemon_cake.jpg" alt="lemon squares" />
                <h3>Lemon squares</h3>
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
        </section>
    );
}

export default HealthyRecipes;