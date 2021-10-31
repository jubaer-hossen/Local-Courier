import React from 'react';

const FastTeam = () => {
    return (
        <div className="text-center container">
            <h1>OUR FAST TEAM</h1>
            <div className="d-md-flex justify-content-center align-items-center my-4">
                <div className="border rounded me-2">
                    <div>
                        <img
                            className="img-fluid"
                            src="http://fastgear.themerex.net/wp-content/uploads/2016/11/team8-370x493.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <h3>Derek Jackson</h3>
                        <p className="text-success fw-bold">Courier</p>
                    </div>
                </div>
                <div className="border rounded me-2">
                    <div>
                        <img
                            className="img-fluid"
                            src="http://fastgear.themerex.net/wp-content/uploads/2016/11/team7-370x493.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <h3>Frank Nelson</h3>
                        <p className="text-success fw-bold">Messenger</p>
                    </div>
                </div>
                <div className="border rounded me-2">
                    <div>
                        <img
                            className="img-fluid"
                            src="http://fastgear.themerex.net/wp-content/uploads/2016/11/team6-370x493.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <h3>Rachel Green</h3>
                        <p className="text-success fw-bold">Dispatcher</p>
                    </div>
                </div>
                <div className="border rounded">
                    <div>
                        <img
                            className="img-fluid"
                            src="http://fastgear.themerex.net/wp-content/uploads/2016/11/team5-370x493.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <h3>Will Thomas Bycicle</h3>
                        <p className="text-success fw-bold">Bycicle Mechanic</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FastTeam;
