import React, { useState, useEffect } from 'react';
import "./Slider.css"

const images = [require("../Images/Robotics/VEX_GO.jpg"), require("../Images/Robotics/KIT.png"), require("../Images/Robotics/KIT.jpg")]

function Slider() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            let newInd = index
            newInd++

            if (newInd === images.length) newInd = 0

            setIndex(newInd)
         }, 2500)
    }, [index])

    function giveClassName() {
        if (index === 1) return "up1"
        if (index === 2) return "up2"
        return ""
    }

    return (
        <div className='slideDiv'>
            {images.map((image, myInd) => (
                <img src={images[myInd]} className={"slide " + giveClassName(myInd)} alt='hi'/>
            ))}
        </div>
    );
}

export default Slider;