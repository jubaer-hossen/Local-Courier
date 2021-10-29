import React, { useEffect, useState } from 'react';
import ShowCouriers from './ShowCouriers';

const Couriers = () => {
    const [couriers, setCouriers] = useState([]);
    useEffect(() => {
        const url = 'https://secret-wave-38214.herokuapp.com/services';

        fetch(url)
            .then(res => res.json())
            .then(data => setCouriers(data));
    }, []);
    return (
        <div className="my-5 text-center container">
            {couriers.length === 0 && (
                <div className="d-flex justify-content-center pt-5 mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <h1>All Local Courier Near You</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {couriers.map(courier => (
                    <ShowCouriers
                        key={courier.id}
                        courier={courier}
                    ></ShowCouriers>
                ))}
            </div>
        </div>
    );
};

export default Couriers;
