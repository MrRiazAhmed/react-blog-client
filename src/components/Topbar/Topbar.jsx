import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./Topbar.css"

const Topbar = () => {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"
    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">Write</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        { user && "LogOut" }
                        </li>
                </ul>
            </div>
            <div className="topRight">


                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={ PF + user.profilePic}
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default Topbar;