import React from "react";
import "./Cards.css";
import icon3 from "./icon3.png";
import icon2 from "./icon2.png";
import icon1 from "./icon1.png";

const Cards = () => (

    <div className="imageCards">
        <div className="container">
            <div className="row">
                <div className="col-md-4" >
                    <img className="icons" src={icon3} alt="battery"></img>
                    <h3>BATTERIES</h3>
                    <p>Rechargeable batteries can contain corrosive acids and heavy metal elements that can be toxic to the environment. Rechargeable batteries are found in cell phones, tablets, laptops, uninterruptible power supply (UPS) devices, and cordless tools. </p>
                </div>

                <div className="col-md-4">
                <img className="icons" src={icon2} alt="electronics"></img>
                    <h3>ELECTRONICS</h3>
                    <p>Many electronic devices are made of valuable substances like plastic, steel, aluminum, copper, gold, and silver that can be recovered. Devices include computer monitors, LCD televisions, keyboards, stereos, video game consoles, printers, and cameras. </p>
                    
                </div>

                <div className="col-md-4">
                <img className="icons" src={icon1} alt="appliances"></img>
                    <h3>HOME ELECTRONICS</h3>
                    <p>Home electronics include refrigerators, microwaves, toasters, vacuum cleaners, electric toothbrushes, air conditioners, washers, dryers, and dishwashers. Compact fluorescent light (CFL) bulbs contain small amounts of mercury and must therefore be recycled.</p>
                </div>

            </div>
        </div>
    </div>



);

export default Cards;