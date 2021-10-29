import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="bg-img d-flex justify-content-center align-items-center text-center"></div>
            <div className="text-white bg-text">
                <h1>Deshi Courier</h1>
                <h5>
                    Please, <br /> Choose your Courier services
                </h5>
            </div>
        </div>
    );
};

export default Banner;
