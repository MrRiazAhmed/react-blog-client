import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePage from '../../components/SinglePage/SinglePage';
import "./Single.css"

const Single = () => {
    return (
        <div className="single">
            <SinglePage/>
            <Sidebar />           
        </div>
    );
};

export default Single;