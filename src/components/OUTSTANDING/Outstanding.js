import React from 'react';
import './Outstanding.css';

const Outstanding = () => {
    return (
        <div className="container my-5">
            <div className="text-center mt-5">
                <h4 className="text-secondary">WE CARE ABOUT CUSTOMER</h4>
                <h2>OUR OUTSTANDING SERVICES</h2>
            </div>
            <div>
                <div class="row row-cols-1 row-cols-md-1 g-4">
                    <div class="col">
                        <div class="h-100 d-md-flex align-items-center">
                            <div className="img-color">
                                <img
                                    className="img-fluid"
                                    src="https://i.ibb.co/P5pkwWj/running.png"
                                    alt="..."
                                />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Our Speed</h5>
                                <p class="card-text">
                                    Why use a Courier Service if the item won’t
                                    arrive quickly? Our streamlined network
                                    ensures the fastest possible movement of
                                    documents and packages. Why use a Courier
                                    Service if the item won’t arrive quickly?
                                    Our streamlined network ensures the fastest
                                    possible movement of documents and packages.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100 d-md-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title text-center">
                                    Reliability
                                </h5>
                                <p class="card-text">
                                    The SCS system of security checks and
                                    emergency back-ups is absolutely complete.
                                    Thanks to computerized administration and a
                                    staff that is second to none. The SCS system
                                    of security checks and emergency back-ups is
                                    absolutely complete. Thanks to computerized
                                    administration and a staff that is second to
                                    none.
                                </p>
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://i.ibb.co/7tVVmF6/credibility.png"
                                    class="card-img-top img img-thumbnail"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100 d-md-flex align-items-center">
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://i.ibb.co/MGWc0KQ/low-cost.png"
                                    class="card-img-top img"
                                    alt="..."
                                />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Low Cost</h5>
                                <p class="card-text">
                                    All rates are quite reasonable, even for
                                    heavy/lightweight items, fragile items,
                                    articles or bulky printed materials. All
                                    rates are quite reasonable, even for
                                    heavy/lightweight items, fragile items,
                                    articles or bulky printed materials.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outstanding;
