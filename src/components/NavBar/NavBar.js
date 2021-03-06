import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img1 from '../../img/icons8-courier-64.png';

const NavBar = () => {
    const { logOut, user } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={img1} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/myOrder"
                                >
                                    My-Order
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/allOrders"
                                >
                                    AllOrders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/ManageAllServices"
                                >
                                    ManageAllServices
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/AddNewService"
                                >
                                    AddNewService
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                >
                                    ABOUT-US
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="text-white me-2 nav-link">
                                    {user.displayName}
                                </span>
                            </li>
                            <li className="nav-item">
                                <img
                                    width="50"
                                    // // src={user.photoUrl}
                                    className="rounded-circle me-3"
                                    // src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    src={
                                        user.photoUrl
                                            ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                                            : ''
                                    }
                                    alt=""
                                />
                            </li>
                            {user.email ? (
                                <li className="nav-item">
                                    <button
                                        onClick={logOut}
                                        className="btn btn-warning"
                                    >
                                        <i className="fas fa-sign-out-alt"></i>{' '}
                                        Log Out
                                    </button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/login"
                                    >
                                        <i className="fas fa-sign-in-alt"></i>{' '}
                                        Log In
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
